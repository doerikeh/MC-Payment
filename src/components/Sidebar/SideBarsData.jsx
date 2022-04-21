
export function SideBarsData(className, data, children){
    return (
        <div className={className} data={data}>
            {children}
        </div>
    )
}