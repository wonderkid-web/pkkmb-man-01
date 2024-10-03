'use client'

import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import { Button, Input } from '@mui/material'

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function PDFReviewer({ pdfBlob }: { pdfBlob: Blob }) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.0)
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)

  useEffect(() => {
    if (pdfBlob) {
      const url = URL.createObjectURL(pdfBlob)
      setPdfUrl(url)
      return () => {
        URL.revokeObjectURL(url)
      }
    }
  }, [pdfBlob])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => Math.min(Math.max(1, prevPageNumber + offset), numPages || 1))
  }

  function changeScale(delta: number) {
    setScale(prevScale => Math.min(Math.max(0.5, prevScale + delta), 2.0))
  }

  if (!pdfUrl) {
    return <div>Loading PDF...</div>
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="border rounded-lg p-4 bg-white shadow-lg">
        <Document
          file={pdfBlob}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex justify-center"
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          onClick={() => changePage(-1)}
          disabled={pageNumber <= 1}
        //   size="icon"
        //   variant="outline"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center space-x-1">
          <Input
            type="number"
            // min={1}
            // max={numPages || 1}
            value={pageNumber}
            onChange={(e) => setPageNumber(parseInt(e.target.value))}
            className="w-16 text-center"
          />
          <span>/ {numPages}</span>
        </div>
        <Button
          onClick={() => changePage(1)}
          disabled={numPages === null || pageNumber >= numPages}
        //   size="icon"
        //   variant="outline"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          onClick={() => changeScale(-0.1)}
        //   size="icon"
        //   variant="outline"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <span className="w-16 text-center">{(scale * 100).toFixed(0)}%</span>
        <Button
          onClick={() => changeScale(0.1)}
          // size="icon"
          // variant="outline"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}