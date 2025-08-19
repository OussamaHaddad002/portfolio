'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, X } from 'lucide-react'

interface VideoPlayerProps {
  videoSrc: string
  posterSrc?: string
  title: string
  className?: string
}

const VideoPlayer = ({ videoSrc, posterSrc, title, className = '' }: VideoPlayerProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const previewVideoRef = useRef<HTMLVideoElement>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)

  // Handle preview video on hover
  useEffect(() => {
    const previewVideo = previewVideoRef.current
    if (!previewVideo) return

    if (isHovered) {
      previewVideo.currentTime = 0
      previewVideo.play().catch(console.error)
    } else {
      previewVideo.pause()
      previewVideo.currentTime = 0
    }
  }, [isHovered])

  // Handle modal video
  useEffect(() => {
    const modalVideo = modalVideoRef.current
    if (!modalVideo) return

    if (isModalOpen) {
      modalVideo.currentTime = 0
      modalVideo.play().catch(console.error)
    } else {
      modalVideo.pause()
      modalVideo.currentTime = 0
    }
  }, [isModalOpen])

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  return (
    <>
      {/* Preview Video Container */}
      <div
        className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Preview Video */}
        <video
          ref={previewVideoRef}
          className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
          muted
          loop
          playsInline
          poster={posterSrc}
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            className="bg-white/20 backdrop-blur-lg rounded-full p-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Play size={32} className="text-white ml-1" />
          </motion.div>
        </div>

        {/* Hover Indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm font-medium">
            Click to play full video
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-full max-w-5xl mx-4">
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={32} />
            </button>

            {/* Modal Video */}
            <motion.div
              className="relative bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={modalVideoRef}
                className="w-full h-auto max-h-[80vh] object-contain"
                controls
                autoPlay
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">{title}</h3>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default VideoPlayer
