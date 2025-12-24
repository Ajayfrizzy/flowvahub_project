import { CheckCircle, Globe, Gift } from 'lucide-react';

export const MobileAppBenefitsSection = () => {
return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Mobile App Card */}
                <div className="bg-black text-white p-10 rounded-2xl">
                    <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors mb-6 cursor-pointer">
                        Download
                    </button>
                    <h2 className="text-3xl font-bold mb-4">ORGANIZE, DISCOVER, AND EARN ON THE GO.</h2>
                    <div className="space-y-10 flex items-center">
                    <div>
                        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg cursor-pointer">
                            Apple App Store
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg cursor-pointer">
                            Google Play Store
                        </div>
                    </div>
                    <div className="border border-white/20 rounded-lg px-4 py-2">
                            barcode
                    </div>
                    </div>
                    <p className="text-2xl bg-yellow-400 text-gray-900 px-2 py-3 rounded">⌛ Coming soon</p>
                </div>

                {/* Benefits Card */}
                <div className="bg-white p-10 rounded-2xl shadow-lg">
                    <button className="bg-black text-white px-6 py-3 rounded-full font-semibold mb-6 cursor-pointer">
                        Benefits
                    </button>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-black rounded-full shrink-0 mt-2" />
                                <p className="font-bold text-black text-xl">QUICK DAILY CHECK-INS</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-gray-400 rounded-full shrink-0 mt-2" />
                                <p className="font-bold text-gray-400 text-xl">DISCOVER TOOLS ANYWHERE</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-gray-400 rounded-full shrink-0 mt-2" />
                                <p className="font-bold text-gray-400 text-xl block">NEVER MISS A REWARD</p>
                        </li>
                    </ul>
                    <div className='flex space-x-3 mt-10'>
                        <p className='w-50 shadow-2xl h-50 flex justify-center items-center border-b-4 rounded-lg'>image 1</p>
                        <p className='w-25 shadow-2xl h-50 flex justify-center items-center border-b-4'>image 2</p>
                        <p className='w-25 shadow-2xl h-50 flex justify-center items-center border-b-4'>image 3</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};
