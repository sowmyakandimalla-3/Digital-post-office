import React, { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function QRScanner({ onResult, onClose }) {
  const scannerRef = useRef(null);
  const regionId = "html5qr-reader";

  useEffect(() => {
    const config = { fps: 10, qrbox: 250, rememberLastUsedCamera: true };
    const html5Qrcode = new Html5Qrcode(regionId, { verbose: false });
    scannerRef.current = html5Qrcode;

    Html5Qrcode.getCameras()
      .then(cameras => {
        const cameraId = (cameras && cameras[0] && cameras[0].id) || null;
        if (cameraId) {
          html5Qrcode.start(
            cameraId,
            config,
            decodedText => {
              onResult(decodedText);
              html5Qrcode.stop().catch(()=>{});
            },
            errorMessage => {}
          ).catch(() => {});
        }
      })
      .catch(() => {});

    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().catch(()=>{});
        scannerRef.current.clear().catch(()=>{});
        scannerRef.current = null;
      }
    };
  }, [onResult]);

  return (
    <div style={{width:"100%",maxWidth:560}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
        <div style={{fontWeight:700,color:"var(--primary-dark)"}}>Scan QR</div>
        <button className="btn btn-ghost" onClick={() => {
          if (scannerRef.current) {
            scannerRef.current.stop().catch(()=>{});
            scannerRef.current.clear().catch(()=>{});
            scannerRef.current = null;
          }
          onClose();
        }}>Close</button>
      </div>
      <div id={regionId} style={{width:"100%",height:360,background:"#000",borderRadius:8}} />
    </div>
  );
}
