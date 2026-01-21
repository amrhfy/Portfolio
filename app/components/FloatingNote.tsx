'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function FloatingNote() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="hidden md:block right-8 bottom-8 fixed w-80">
      <div 
        className={`
          bg-white border border-zinc-200 p-5 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out
          rounded-lg
        `}
      >
        <div className="flex justify-between items-start gap-2 mb-2">
            <span className="font-medium text-zinc-400 text-xs uppercase tracking-wider">
                Thinking aloud
            </span>
            <button 
                onClick={() => setIsVisible(false)}
                className="text-zinc-300 hover:text-zinc-500 transition-colors"
            >
                <X className="w-3 h-3" />
            </button>
        </div>
        
        <div className="space-y-2">
            <p className={`text-zinc-600 text-sm leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
                Claude by Anthropic is absolutely revolutionary. The way it handles complex context and coding tasks is a game-changer for developers. It feels less like a chatbot and more like a genuine reasoning engine that understands intent.
                {isExpanded && (
                    <span className="block mt-2">
                        I'm constantly amazed by its ability to maintain coherence over long conversations and its "Constitutional AI" approach ensures it stays helpful and harmless. It's not just a tool; it's a glimpse into the future of human-AI collaboration.
                    </span>
                )}
            </p>
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="font-medium text-zinc-400 hover:text-zinc-900 text-xs transition-colors"
            >
                {isExpanded ? 'Read less' : 'Read more'}
            </button>
        </div>
      </div>
    </div>
  )
}
