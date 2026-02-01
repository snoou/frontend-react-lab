import { useState } from "react"
export function Form({add}) {

    const [img, Setimg] = useState("")
    const [name, Setname] = useState("")
    function Handelsub(e) {
        e.preventDefault();
        const id = crypto.randomUUID()
        const newFrend =
        {
            id,
            name,
            balance: 0,
            img,
        };

        add(newFrend)


    }


    return <form className="bg-blue-700 text-white w-2/6 p-10" onSubmit={Handelsub}>
        <div className="flex gap-2">
            <label for="name">name</label>
            <input  onChange={(e) => Setname(e.target.value)} className="bg-blue-200" id="name" type="text" />
        </div>
        <div className="flex gap-2">
            <label for="urlimg">url img</label>
            <input value={img} onChange={(e) => Setimg(e.target.value)} className="bg-blue-200" id="urlimg" type="text" />
        </div>

        <button className="px-8 py-4 text-blue-950 bg-amber-500 rounded-2xl hover:shadow-2x" >add</button>
    </form>
}