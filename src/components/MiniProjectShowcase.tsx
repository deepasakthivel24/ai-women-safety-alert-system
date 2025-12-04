"use client"

import { Counter } from "@/components/demos/Counter"
import { ColorPicker } from "@/components/demos/ColorPicker"
import { TodoList } from "@/components/demos/TodoList"
import { Calculator } from "@/components/demos/Calculator"

export function MiniProjectShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Mini Project Showcase</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive demos showcasing various web development concepts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Counter />
          <ColorPicker />
          <TodoList />
          <Calculator />
        </div>

        <footer className="text-center mt-12 text-sm text-muted-foreground">
          Built with Next.js, React, and Tailwind CSS
        </footer>
      </div>
    </div>
  )
}
