export default function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return(
        // Input para os dados necessários para conversão
        <>
            <input className="rounded-lg pl-[5px] bg-[#7c9eb2] placeholder-white flex-1 min-w-[250px] min-h-[40px] w-full focus:outline-none focus:ring-1 focus:ring-black" name="Input" {...props}/>
        </>
    )
}