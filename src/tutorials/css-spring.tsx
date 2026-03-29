import { spring } from "motion"
import { useState } from "react"

export default function SpringBox() {
    const [state, setState] = useState(false)

    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <div
                className={`w-24 h-24 bg-[#8df0cc] rounded-xl ${state ? "translate-x-full rotate-180" : "-translate-x-full"
                    }`}
                style={{ transition: `transform ${spring(0.5, 0.8)}` }}
            />
            <button
                onClick={() => setState(!state)}
                className="bg-[#8df0cc] text-[#0f1115] rounded-md px-4 py-2 mx-2"
            >
                Toggle position
            </button>
        </div>
    )
}
