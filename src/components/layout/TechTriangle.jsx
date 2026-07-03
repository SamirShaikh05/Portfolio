import {motion as Motion} from 'framer-motion'

function TechTriangle({ tech }) {
    const rows = [1, 2, 3, 4, 5, 6];
    let index = 0;
    return (
        <div className="flex flex-col items-center gap-4">
            {rows.map((count, rowIndex) => {

                const row = tech.slice(index, index + count);
                index += count;
                if (!row.length) return null;

                return (

                    <Motion.div
                        key={rowIndex}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: rowIndex * 0.08
                        }}
                        className="flex justify-center gap-4"
                    >

                        {row.map((item) => {

                            const Icon = item.icon;

                            return (

                                <div key={item.name} className="flex w-40 items-center gap-3 rounded-xl border
                                    border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl transition hover:scale-105 hover:border-blue-500/30"
                                >
                                    <Icon
                                        className={`h-5 w-5 ${item.color}`}
                                    />
                                    <span className="text-sm text-gray-200">
                                        {item.name}
                                    </span>

                                </div>
                            );
                        })}
                    </Motion.div>
                );
            })}
        </div>
    );
}

export default TechTriangle;