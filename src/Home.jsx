import { useState } from "react";
function Home() {
    const [selectedColour, setSelectedColour] = useState()
    function changeColour(newColour) {
      setSelectedColour((selectedColour) => selectedColour = newColour)
    }
    return(
        <>
        <div className="flex justify-center jus">
            <div className="w-full h-[85px] bg-gray-950 rounded-md text-white"> 
            <br />
                <a href="" className="ml-[50px] text-[25px]">Home</a>
                <a href="" className="ml-[50px] text-[25px]">Studio</a>
                <a href="" className="ml-[50px] text-[25px]">Works</a>
                <a href="" className="ml-[50px] text-[25px]">Contact</a>
                <button className="float-right text-[20px] mr-[50px] bg-pink-500 p-1 rounded-md">Download</button>
                <a href="" className="ml-[20px] mr-[20px] text-[25px] float-right">🔍</a>
            </div>
        </div>
        <br /><br /><br /><br /><br />
        <div className="ml-[150px]">
            <h1 className="text-[50px] text-white font-extrabold">Think. Solve. <br /> Idk.</h1>
            <p className="font-extrabold text-pink-500">→ What I Do</p>
            <p className="text-white">we enjoy creating delightful, human-centered digital <br /> games</p>
            <button className="bg-pink-500 rounded-md p-[5px] mt-[5px] border-black border-[2.5px]">Learn More</button>
            <img className="absolute left-[750px] bottom-[90px] w-[450px] h-[400px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPMAAACUCAMAAABx2e/vAAAA8FBMVEUZFiv///8AAAAXFCvl5ObQz9ECAwnp6em4uLelpajDwsUUFBXd3d2CgoiQj5XFxch6enoAABhHR07w8PBsa28oKC1bWmNaWlwfHyklIjSenqAJAiL39/cAABsAABSsrKv18/oODR84N0XrAAB7eX4NCSIHBxKCeZiypdHZ1uAuLDpjXHfFuuDOydxYU2qpncVvaIJMSF7FvtiXj6zQw+5IRVLf1Pnr5vYzMzdkXnJ5c4y4rdHk2/f97Oz609T84OD2qavxbnDwWFqxqcT1mZv4tbbtChXtLC/4wcHzgYPsISF0aZDczP+Khpg/Ok9KSkiDQsU8AAAEG0lEQVR4nO3WeXOiSBgGcGgQBVFjJBgV8ciAxngko6OZI3E2mb3n+P7fZoHuBrrJpGqrjJuten5/WN2vTeNjc7SiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwOunJYRWVmLNrKjlvlOkiiYpjBFPVKgUf5VWqB/CyDdiYXSWUdIy+lqfNsLoZCPeDMLQyIQ9RQl8I18Z8eOzUhhoo1AqGj2tH4rFkI/yebqgKYwYHTayMZle6pES0TrdctwqV6p11pgFxNR1+vXVfFHWU7br95erhZ5TP6uU8329vJhfk9VUF7W6ZPLxUhjXINfJ5GXrnIYOblZv8wNMctDMZL0ZqpFWlNlUE40qa5TedYhFmy1yvd2pGe/Nbf/9PF9RzbOGKtptr8l8IxXVAVlvh0LFJh/o5PYZzdxffhSmrhw4c4WHSjNbPPNuPuFfl0lN+uml05NWvu91C5lVtUb0Qs3k/2Muc501WOamIx52xMzDT2s58zBdIf30xHs68939nbrfezRz+YnM8n/zmjLHJxMzD7fb9IdKmdUBz/z54t775WH/v81sSJkf15VSmpld2xUrUZulmb/8+vBwd4jMDTp33T9iZlNa53LbIDVPykyYcZr54rcLvs7CPf+vM8/ozOFh39A/zbyLn5y2aYuZnSapy5kHMXOyvGVZ7j8//P7lD7rORr0bGbBzVOKOU03GDXeLqNN6PnOFTn3VfKHMvbCbz5zduUJmv7jO1GaSPbf//GtPGzUt3reQd2ySNom3POfJuN3m72gFy89npr6uXup+vnlc5DJ7377lI6WZv6/fqjwze4adxN68/z5OM+/pKseZ4xA9l2fuRz3tnK3zZaNheVLmINlr+jxzPZn66uawG7Es89XXXT6z++PJzMv5pzSzeD8b4+L7uZ6sW5Y5yDLnZJlHfj8W8sxjOrX/MvezautDL5/ZGf3oZi+j9Bnm6EM5s53QxT3JcPvotttjKXNunRtOu/24EdfZozOVHJ5Zp4VD7z0rqoxl9g0nW2me2U1r8v2c7j09lnk1Uzr0HE9mtsY+WU/FzPxkznHez8XMTaVTTVea78O8dOl/tg/bbdgt4kVjn7mfG+Oe0pGeYf955mgfQAqZMyV5H8YzTxetFr8Cas9c2+NA0V5h5vDDlC1aS8rccgmRMrNr24ofOrc2zyyuc+4ZFmdWiPh+PlJmo1uSmdVa9OlGa9Jcrhe0ZhHHzo9puL2+Ix5WOzejT7s70hRtNkhKtpOsc+DSY63TJLNixl1zFme24nqF1ITJLbdtCVN3jYNmVgxSoIXRR3wZKs2s1hTHRF/3xYqvsZFxSlZj+6ce6wZJj43rxW12iC9N3hP7B44MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABH9g+S62e8J3WACAAAAABJRU5ErkJggg==" alt="" />
        </div>
        <br /><br /><br /><br /><br /><br />
        <div className="ml-[750px]">
            <img className="w-[400px] absolute right-[855px] top-[650px]" src="data:image/png;base64,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" alt="" />
            <h1 className="text-[50px] text-white font-extrabold mt-[75px]">Think Outside of the <br /> Square Space</h1>
            <p className="font-extrabold text-pink-500">→ Who We Are</p>
            <p className="text-white">A creative group of designers and develepors with a passion for <br />the arts.</p>
            <button className="bg-pink-500 rounded-md p-[5px] mt-[5px] border-black border-[2.5px]">See more</button>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="ml-[150px]">
            <h1 className="cursor-pointer text-[50px] text-white font-extrabold hover:text-pink-500" onClick={() => changeColour("Cara")}>Web Design</h1>
            <h1 className="cursor-pointer text-[50px] text-white font-extrabold hover:text-pink-500" onClick={() => changeColour("Masukin")}>Development</h1>
            <h1 className="cursor-pointer text-[50px] text-white font-extrabold hover:text-pink-500" onClick={() => changeColour("Image")}>illustration</h1>
            <h1 className="cursor-pointer text-[50px] text-white font-extrabold hover:text-pink-500" onClick={() => changeColour("Ke Usestate")}>Product Design</h1>
            <h1 className="cursor-pointer text-[50px] text-white font-extrabold hover:text-pink-500" onClick={() => changeColour("Gimana?")}>Social Media</h1>
            <p className="text-[50px] text-white">{selectedColour}</p>
        </div>
        <br /><br /><br /><br /><br />
        </>
    )
}
export default Home