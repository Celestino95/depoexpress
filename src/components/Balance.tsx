import { Eye } from "lucide-react"

const Balance = () =>{

     {/* Saldo disponível */}
     return (

        <div className="text-white w-full max-w-xs my-4 text-center">
            <p className="text-gray-200 text-sm">Saldo disponível</p>
            <div className="flex items-center justify-center space-x-2">
            <span className="text-lg font-bold">KZ</span>
            <Eye className="w-5 h-5 text-white" />
            </div>
            <p className="text-2xl font-bold text-white">20.000,00</p>
        </div>

     )
}

export default Balance;