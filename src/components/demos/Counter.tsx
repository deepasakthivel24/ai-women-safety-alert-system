"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Minus, Plus, RotateCcw } from "lucide-react"

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Counter</CardTitle>
        <CardDescription>A simple counter with increment and decrement</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-center">
          <div className="text-6xl font-bold tabular-nums">{count}</div>
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={() => setCount(count - 1)} 
            variant="outline" 
            className="flex-1"
            size="lg"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Button 
            onClick={() => setCount(0)} 
            variant="outline" 
            className="flex-1"
            size="lg"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button 
            onClick={() => setCount(count + 1)} 
            variant="outline" 
            className="flex-1"
            size="lg"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
