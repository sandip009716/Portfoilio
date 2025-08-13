import React, { useState, useEffect, useRef } from "react";
import localforage from "localforage";

export default function Certification() {
  const [showUploader, setShowUploader] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);
  const [certs, setCerts] = useState([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [filePassword, setFilePassword] = useState("");
  const [viewModal, setViewModal] = useState({
    open: false,
    cert: null,
    unlocked: false,
  });
  const [passwordAttempt, setPasswordAttempt] = useState("");
  const [error, setError] = useState("");

  const certSectionRef = useRef(null);

  useEffect(() => {
    const savedCerts = localStorage.getItem("certifications");
    if (savedCerts) {
      setCerts(JSON.parse(savedCerts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("certifications", JSON.stringify(certs));
  }, [certs]);

  const handleFileChange = (e) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title.trim() || !file) {
      setError("Please provide a title and file.");
      return;
    }
    if (!filePassword) {
      setError("Please set a password.");
      return;
    }

    const id = Date.now();
    const newCert = {
      id,
      title: title.trim(),
      fileName: file.name,
      password: filePassword,
      type: file.type,
    };

    await localforage.setItem(`cert-${id}`, file);

    setCerts((c) => [newCert, ...c]);
    setTitle("");
    setFile(null);
    setFilePassword("");
    setError("");
    document.getElementById("cert-file-input").value = null;

    setShowUploader(false);
    setShowCertificates(true);
    setTimeout(() => {
      certSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleOpen = (cert) => {
    setPasswordAttempt("");
    setViewModal({ open: true, cert, unlocked: false });
    setError("");
  };

  const handleCloseModal = () => {
    setViewModal({ open: false, cert: null, unlocked: false });
    setPasswordAttempt("");
    setError("");
  };

  const handleVerify = async () => {
    if (passwordAttempt === viewModal.cert.password) {
      const blob = await localforage.getItem(`cert-${viewModal.cert.id}`);
      if (blob) {
        const dataUrl = await blobToDataURL(blob);
        setViewModal((v) => ({
          ...v,
          unlocked: true,
          dataUrl,
        }));
      }
    } else {
      setError("Incorrect password.");
    }
  };

  const handleDownload = async () => {
    const blob = await localforage.getItem(`cert-${viewModal.cert.id}`);
    if (blob) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = viewModal.cert.fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this certificate?")) {
      await localforage.removeItem(`cert-${id}`);
      setCerts(certs.filter((cert) => cert.id !== id));
    }
  };

  const blobToDataURL = (blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  };

  return (
    <div>
      <div className="flex gap-4 mb-1">
        <button
          onClick={() => {
            setShowUploader((prev) => !prev);
            setShowCertificates(false);
          }}
          className="px-2 py-2 bg-slate-800 text-white rounded-md shadow"
        >
          {showUploader ? "Hide Uploader" : "Upload Certificate"}
        </button>

        <button
          onClick={() => {
            setShowCertificates((prev) => !prev);
            setShowUploader(false);
           
            if (!showCertificates) {
              setTimeout(() => {
                certSectionRef.current?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }
          }}
          className="px-2 py-3 bg-blue-600 text-white rounded-md shadow"
        >
          {showCertificates ? "Hide Certificates" : "My Certificates"}
        
        </button>
      </div>

      {showUploader && (
        <form
          onSubmit={handleUpload}
          className="mb-5 bg-gray-300 shadow rounded-md px-3 pt-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 m-">
            <input
              className="col-span-2 border rounded px-3 py-2"
              placeholder="Certificate title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              id="cert-file-input"
              type="file"
              accept="application/pdf,image/*"
              onChange={handleFileChange}
              className="border rounded px-3 py-2"
            />
            <input
              type="password"
              placeholder="Set password"
              value={filePassword}
              onChange={(e) => setFilePassword(e.target.value)}
              className="border rounded px-3 py-2"
            />
            <div className="md:col-span-3 flex items-center gap-3">
              <button
                type="submit"
                className="px-4 py-2 rounded shadow bg-slate-800 text-white mb-5"
              >
                Upload
              </button>
              {error && <div className="text-red-600">{error}</div>}
            </div>
          </div>
        </form>
      )}

{showCertificates && (

  <div
    ref={certSectionRef}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap- mt-10  " // Added small padding
  >
    {certs.length === 0 && (
      <div className="text-slate-600 col-span-full">No certificates uploaded yet.</div>
    )}
    
    {certs.map((c) => (
      <div 
        key={c.id} 
        className="border rounded p-3 bg-white shadow w-45 mb-5 " // Added mb-4 as fallback
      >
        <div className="font-medium mb-1 truncate">{c.title}</div>
        <div className="text-sm text-slate-500 mb-3 truncate">{c.fileName}</div>
        <div className="flex gap-2 w-full mt-8">
          <button
            onClick={() => handleOpen(c)}
            className="px-3 py-1 rounded border bg-gray-200 hover:bg-gray-300 w-1/2 text-center "
          >
            View<span className="text-red-500">*</span>
          </button>
          <button
            onClick={() => handleDelete(c.id)}
            className="px-3 py-1 rounded border bg-red-100 text-red-600 hover:bg-red-200 w-1/2 text-center"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
)}




      {viewModal.open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-xl w-[90%] p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">{viewModal.cert?.title}</h3>
              <button onClick={handleCloseModal} className="text-xl">
                ✕
              </button>
            </div>
            {!viewModal.unlocked ? (
              <div>
                <p className="mb-2 text-slate-600">Enter password:</p>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value={passwordAttempt}
                    onChange={(e) => setPasswordAttempt(e.target.value)}
                    className="flex-1 border rounded px-3 py-2"
                  />
                  <button
                    onClick={handleVerify}
                    className="px-4 py-2 rounded bg-slate-800 text-white"
                  >
                    Verify
                  </button>
                </div>
                {error && <div className="text-red-600 mt-2">{error}</div>}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="border rounded p-2 max-h-[80vh] w-[80vh] overflow-auto">
                  {viewModal.cert.type === "application/pdf" ? (
                    <embed
                      src={viewModal.dataUrl}
                      type="application/pdf"
                      width="100%"
                      height={600}
                    />
                  ) : (
                    <img
                      src={viewModal.dataUrl}
                      alt={viewModal.cert.title}
                      className="w-full h-auto"
                    />
                  )}
                </div>
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 border rounded"
                >
                  Download
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
