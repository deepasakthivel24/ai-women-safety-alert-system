"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function ColorPicker() {
  const [red, setRed] = useState(99)
  const [green, setGreen] = useState(102)
  const [blue, setBlue] = useState(241)

  const toHex = (value: number) => value.toString(16).padStart(2, '0')
  const hexColor = `#${toHex(red)}${toHex(green)}${toHex(blue)}`

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Color Picker</CardTitle>
        <CardDescription>Create custom colors using RGB sliders</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div 
          className="h-32 rounded-lg border-2 border-border transition-colors"
          style={{ backgroundColor: hexColor }}
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Red: {red}</Label>
            <Slider 
              value={[red]} 
              onValueChange={([value]) => setRed(value)}
              max={255}
              className="[&_[role=slider]]:bg-red-500"
            />
          </div>
          <div className="space-y-2">
            <Label>Green: {green}</Label>
            <Slider 
              value={[green]} 
              onValueChange={([value]) => setGreen(value)}
              max={255}
              className="[&_[role=slider]]:bg-green-500"
            />
          </div>
          <div className="space-y-2">
            <Label>Blue: {blue}</Label>
            <Slider 
              value={[blue]} 
              onValueChange={([value]) => setBlue(value)}
              max={255}
              className="[&_[role=slider]]:bg-blue-500"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Hex Color</Label>
          <Input value={hexColor.toUpperCase()} readOnly className="font-mono" />
        </div>
      </CardContent>
    </Card>
  )
}
