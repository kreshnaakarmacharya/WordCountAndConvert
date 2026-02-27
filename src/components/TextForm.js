import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");
    const isDark = props.mode === "dark";

    const handleUpClick = () => setText(text.toUpperCase());
    const handleLowClick = () => setText(text.toLowerCase());
    const handleClear = () => setText("");
    const handleOnChange = (e) => setText(e.target.value);

    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const readingTime = (0.008 * wordCount).toFixed(2);

    return (
        <div
            style={{
                height: "100vh",
                background: isDark
                    ? "linear-gradient(135deg, #141e30, #243b55)"
                    : "linear-gradient(135deg, #e3f2fd, #ffffff)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "0.3s"
            }}
        >

            <div
                className="shadow-lg p-4 rounded-4"
                style={{
                    width: "95%",
                    maxWidth: "1100px",
                    backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
                    color: isDark ? "white" : "black"
                }}
            >

                {/* Header + Toggle */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="fw-bold m-0">{props.heading}</h4>

                    <div className={`form-check form-switch text-${isDark ? 'light' : 'dark'}`}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            onClick={props.toggleMode}
                        />
                        <label className="form-check-label fw-semibold">
                            {isDark ? "☀ Light" : "🌙 Dark"}
                        </label>
                    </div>
                </div>

                <div className="row g-3">

                    {/* Left Side - Textarea */}
                    <div className="col-md-7">
                        <textarea
                            className="form-control rounded-3"
                            rows="8"
                            value={text}
                            onChange={handleOnChange}
                            placeholder="Type your text here..."
                            style={{
                                backgroundColor: isDark ? "#121212" : "#ffffff",
                                color: isDark ? "white" : "black",
                                border: "none"
                            }}
                        ></textarea>

                        <div className="d-flex gap-2 mt-3 flex-wrap">
                            <button
                                disabled={!text}
                                className="btn btn-primary rounded-pill px-3"
                                onClick={handleUpClick}
                            >
                                Uppercase
                            </button>

                            <button
                                disabled={!text}
                                className="btn btn-success rounded-pill px-3"
                                onClick={handleLowClick}
                            >
                                Lowercase
                            </button>

                            <button
                                disabled={!text}
                                className="btn btn-danger rounded-pill px-3"
                                onClick={handleClear}
                            >
                                Clear
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Summary */}
                    <div className="col-md-5">

                        <div
                            className="p-4 rounded-3 h-100"
                            style={{
                                backgroundColor: isDark ? "#2a2a2a" : "#f8f9fa"
                            }}
                        >

                            <h5 className="fw-bold mb-3">📊 Analysis</h5>

                            <p><strong>Words:</strong> {wordCount}</p>
                            <p><strong>Characters:</strong> {text.length}</p>
                            <p><strong>Reading Time:</strong> {readingTime} min</p>

                            <hr />

                            <h6 className="fw-semibold">Preview</h6>
                            <div
                                className="p-2 rounded"
                                style={{
                                    backgroundColor: isDark ? "#1c1c1c" : "white",
                                    minHeight: "80px"
                                }}
                            >
                                {text || "Nothing to preview..."}
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}