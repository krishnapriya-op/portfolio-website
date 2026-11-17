import React, { useState } from 'react'
import '../styles/Resume.css'
import resumeFile from '../../static/resume.pdf'

const Resume = () => {
    const [previewVisible, setPreviewVisible] = useState(false)

    const togglePreview = () => {
        setPreviewVisible(!previewVisible)
    }

    return (
        <div className="container">
            <div className="section">
                <h1>Resume</h1>
                
                <div className="download-section">
                    <p style={{ color: '#cccccc', marginBottom: '1.5rem' }}>
                        View or download my resume.
                    </p>
                    
                    <div className="action-buttons">
                        <a 
                            href={resumeFile} 
                            download="Krishnapriya-N-Resume.pdf"
                            className="download-btn"
                        >
                            📄 Download Resume
                        </a>
                        
                        <button 
                            className="preview-btn" 
                            onClick={togglePreview}
                        >
                            {previewVisible ? '🙈 Hide Preview' : '👁️ Preview Resume'}
                        </button>
                    </div>
                </div>

                {previewVisible && (
                    <div className="pdf-container" id="pdfContainer">
                        <h2 style={{ color: '#00f5ff', marginBottom: '1.5rem', textAlign: 'center' }}>
                            Resume Preview
                        </h2>
                        
                        {/* PDF Viewer */}
                        <div id="pdfViewer">
                            <iframe 
                                src={resumeFile}
                                className="pdf-viewer" 
                                id="pdfFrame"
                                title="Resume Preview"
                            />
                        </div>
                        
                        {/* Fallback content when PDF is not available */}
                        <div className="pdf-fallback" id="pdfFallback" style={{ display: 'none' }}>
                            <h3>📄 PDF Not Available</h3>
                            <p>The resume PDF will appear here once it is available.</p>
                            <p style={{ marginTop: '1rem' }}>
                                <a 
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.getElementById('pdfFrame').src = resumeFile
                                    }}
                                    style={{ color: '#00f5ff', textDecoration: 'underline' }}
                                >
                                    🔄 Try to load PDF again
                                </a>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Resume

