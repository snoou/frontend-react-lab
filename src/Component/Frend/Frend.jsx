 export function Frend({ item }) {
        return (<>
            <div>
                <div className='flex w-2/6 hover:shadow-xl justify-around  bg-indigo-100 items-center gap-2.5 my-2 '>
                    <img className=' w-36 rounded-full p-2.5 ' src={item.image} alt="profile" />
                    <div>
                        <h2 className='text-2xl font-bold'>{item.name}</h2>
                        <h3 className={item.balance < 0 ? 'text-red-500' : item.balance > 0 ? 'text-green-500' : 'text-neutral-600'}>{item.balance < 0 ? `You owe $${Math.abs(item.balance)}` : item.balance > 0 ? `You are owed $${item.balance}` : `You are all settled up`}</h3>
                    </div>
                    <button className='px-8 py-4 text-blue-950 bg-amber-500 rounded-2xl hover:shadow-2x'>select</button>
                </div>
            </div>

        </>
        )
    }