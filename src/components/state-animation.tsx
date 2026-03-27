import * as motion from "motion/react-client"
import { useState } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

export default function StateAnimation() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [rotate, setRotate] = useState(0)

    return (
        <div id="example">
            <div>
                <motion.div
                    className="w-50 h-50 rounded-3xl border-[5px]"
                    animate={{ x, y, rotate }}
                    transition={{ type: "spring" }}
                />
            </div>
            <div className="flex flex-col pl-14">
                <InputField value={x} set={setX}>
                    x
                </InputField>
                <InputField value={y} set={setY}>
                    y
                </InputField>
                <InputField value={rotate} set={setRotate} min={-180} max={180}>
                    rotate
                </InputField>
            </div>
        </div>
    )
}

interface InputProps {
    children: string
    value: number
    set: (newValue: number) => void
    min?: number
    max?: number
}

function InputField({ value, children, set, min = -200, max = 200 }: InputProps) {
    return (
        <Label>
            <code>{children}</code>
            <Input
                value={value}
                type="range"
                min={min}
                max={max}
                onChange={(e) => set(parseFloat(e.target.value))}
            />

            <Input
                type="number"
                value={value}
                min={min}
                max={max}
                onChange={(e) => set(parseFloat(e.target.value) || 0)}
            />
        </Label>
    )
}
