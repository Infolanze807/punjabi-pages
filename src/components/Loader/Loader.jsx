import { Loader2 } from "lucide-react";
import React from "react";

const FullPageLoader = () => {
    return (
        <div className="flex items-center justify-center h-[90vh]">
        <div class="relative w-7 h-7 animate-spin">
            <div class="absolute w-2 h-2 bg-[--main-color] rounded-full top-0 left-1/2 transform -translate-x-1/2"></div>
            <div class="absolute w-2 h-2 bg-blue-600 rounded-full right-0 top-1/2 transform -translate-y-1/2"></div>
            <div class="absolute w-2 h-2 bg-blue-300 rounded-full bottom-0 left-1/2 transform -translate-x-1/2"></div>
            <div class="absolute w-2 h-2 bg-blue-200 rounded-full left-0 top-1/2 transform -translate-y-1/2"></div>
        </div>
        </div>
    );
};

export default FullPageLoader;
