"use client";

import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function VideoToGif() {
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gifSrc, setGifSrc] = useState(null);
  const ffmpegRef = useRef(null);
  const messageRef = useRef(null);
  const [LocalFile, setLocalFile] = useState(null);

  // Ensure FFmpeg is only loaded in the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      ffmpegRef.current = new FFmpeg();
    }
  }, []);

  const loadFFmpeg = async () => {
    try {
      setIsLoading(true);

      const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
      const ffmpeg = ffmpegRef.current;

      if (!ffmpeg) {
        console.error("FFmpeg not initialized");
        return;
      }

      ffmpeg.on("log", ({ message }) => {
        if (messageRef.current) messageRef.current.innerHTML = message;
      });

      await ffmpeg.load({
        coreURL: await toBlobURL(
          `${baseURL}/ffmpeg-core.js`,
          "text/javascript"
        ),
        wasmURL: await toBlobURL(
          `${baseURL}/ffmpeg-core.wasm`,
          "application/wasm"
        ),
      });

      setLoaded(true);
    } catch (error) {
      console.error("Error loading FFmpeg:", error);
      alert("Failed to load FFmpeg. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const convertToGif = async () => {
    try {
      const ffmpeg = ffmpegRef.current;

      if (!ffmpeg) {
        console.error("FFmpeg not initialized");
        return;
      }
      if (!LocalFile) {
        alert("Please select a video file first.");
      }
      const reader = new FileReader();
      reader.onload = async () => {
        const data = new Uint8Array(reader.result);
        await ffmpegRef.current.writeFile(LocalFile.name, data);
      };
      reader.readAsArrayBuffer(LocalFile);
      const fileName = LocalFile.name;

      await ffmpeg.exec([
        "-i",
        fileName,
        "-vf",
        "fps=10,scale=320:-1:flags=lanczos",
        "-loop",
        "0",
        "output.gif",
      ]);

      const gifData = await ffmpeg.readFile("output.gif");
      // const link = document.createElement('a');
      // link.href = URL.createObjectURL(new Blob([gifData.buffer], { type: 'image/gif' }));
      // link.download = 'output.gif';
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
      setGifSrc(
        URL.createObjectURL(new Blob([gifData.buffer], { type: "image/gif" }))
      );
    } catch (error) {
      console.error("Error converting video to GIF:", error);
      alert("Failed to convert video to GIF. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>QR Code Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.12.22/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      {loaded ? (
        <div>
          {gifSrc ? (
            <img
              src={gifSrc}
              alt="Generated GIF"
              className="mb-4 border rounded-lg"
            />
          ) : (
            <p className="mb-4 text-sm text-gray-600">
              Click "Convert Video to GIF" to start.
            </p>
          )}
          <input
            type="file"
            accept="video/*"
            className="mb-4"
            onChange={async (e) => {
              const file = e.target.files[0];
              if (file) {
                const checkDuration = async (file) => {
                  return new Promise((resolve) => {
                    const video = document.createElement("video");
                    video.preload = "metadata";
                    video.onloadedmetadata = () => {
                      window.URL.revokeObjectURL(video.src);
                      console.log(video.duration, "duration");

                      resolve(video.duration <= 10);
                    };
                    video.src = URL.createObjectURL(file);
                  });
                };

                if (await checkDuration(file)) {
                  setLocalFile(file);
                } else {
                  //   ffmpegRef.current.removeFile(file.name);
                  alert(
                    "Video duration exceeds 10 seconds. Please select a shorter video."
                  );
                }
                const reader = new FileReader();
                reader.onload = async () => {
                  const data = new Uint8Array(reader.result);
                  await ffmpegRef.current.writeFile(file.name, data);
                };
                reader.readAsArrayBuffer(file);
              }
            }}
          />
          <button
            onClick={convertToGif}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Convert Video to GIF
          </button>
          <p ref={messageRef} className="mt-3 text-sm text-gray-600"></p>
        </div>
      ) : (
        <button
          onClick={loadFFmpeg}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition flex items-center"
        >
          Load FFmpeg
          {isLoading && (
            <span className="ml-2 animate-spin">
              <svg
                className="w-4 h-4"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
              </svg>
            </span>
          )}
        </button>
      )}
    </div>
  );
}
