import Card from "@/components/ui/Card/card";

import Card1 from "@/../../public/card1.jpeg"

const MediaNasional = () => {
    return (
        <div>
            <div className="text-center mt-10">hello</div>
            <div className="min-h-screen bg-gray-100 dark:bg-blue-900 p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <Card description="hello" url={Card1.src}/>
                    <Card description="hello" url={Card1.src}/>
                    <Card description="hello" url={Card1.src}/>
                    <Card description="hello" url={Card1.src}/>
                </div>
            </div>
        </div>
    )
}

export default MediaNasional;