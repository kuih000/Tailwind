

function App() {
  return (
    <>
    <div>
      1. Font Family
      <p className="font-sans">The Quick Brown Fox</p>
      <p className="font-serif">The Quick Brown Fox</p>
      <p className="font-mono">The Quick Brown Fox</p>
      2. Gak Tau
      <hr />
      3. Gak Tau Juga
      <hr />
      4. Italic 
      <p className="italic">The Quick Brown Fox</p>
      <p className="not-italic">The Quick Brown Fox</p>
      <hr />
      5. Font Weight 
      <p className="font-light">The Quick Brown Fox</p>
      <p className="font-normal">The Quick Brown Fox</p>
      <p className="font-medium">The Quick Brown Fox</p>
      <p className="font-semibold">The Quick Brown Fox</p>
      <p className="font-bold">The Quick Brown Fox</p>
      <hr />
      6. letter spacing
      <p className="tracking-tighter">The Quick Brown Fox</p>
      <p className="tracking-normal">The Quick Brown Fox</p>
      <p className="tracking-widest">The Quick Brown Fox</p>
      <hr />
      7. line height
      <p className="leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ratione nostrum optio aut quasi, minus incidunt voluptatem at fugiat veritatis praesentium eligendi maxime, excepturi eveniet aliquid nihil. Veniam, aperiam quas!</p>
      <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere necessitatibus, ducimus provident voluptatibus maiores magnam architecto error inventore harum recusandae iusto assumenda a libero aspernatur laudantium. Cupiditate, error at.</p>
      <p className="leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis voluptatibus perferendis obcaecati quo harum aliquid at earum, tenetur, quasi natus eum vitae alias unde deserunt aspernatur? Labore, temporibus non?</p>
      <hr />
      8. text align 
      <p className="text-right">The Quick Brown Fox</p>
      <p className="text-left">The Quick Brown Fox</p>
      <p className="text-center">The Quick Brown Fox</p>
      <p className="text-justify">The Quick Brown Fox</p>
      <hr />
      9. text color
      <p className="text-sky-300">The Quick Brown Fox</p>
      <p className="text-sky-400">The Quick Brown Fox</p>
      <p className="text-sky-500">The Quick Brown Fox</p>
      <p className="text-sky-600">The Quick Brown Fox</p>
      <p className="text-sky-700">The Quick Brown Fox</p>
      <p className="text-sky-800">The Quick Brown Fox</p>
      <p className="text-sky-900">The Quick Brown Fox</p>
      <hr />
      10. text decoration
      <p className="underline">The Quick Brown Fox</p>
      <p className="overline">The Quick Brown Fox</p>
      <p className="line-through">The Quick Brown Fox</p>
      <p className="no-underline">The Quick Brown Fox</p>
      <p className="underline decoration-solid">The Quick Brown Fox</p>
      <p className="underline decoration-double">The Quick Brown Fox</p>
      <p className="underline decoration-dotted">The Quick Brown Fox</p>
      <p className="underline decoration-dashed">The Quick Brown Fox</p>
      <p className="underline decoration-wavy">The Quick Brown Fox</p>
      <hr />
      11. background
      <div className="bg-indigo-500">The Quick Brown Fox</div>
      <div className="bg-rose-500">The Quick Brown Fox</div>
      <div className="bg-teal-500">The Quick Brown Fox</div>
      <hr />
      12. width 
      <div className="w-full bg-indigo-300">width 96</div>
      <div className="w-96 bg-indigo-400">width 96</div>
      <div className="w-80 bg-indigo-500">width 80</div>
      <div className="w-64 bg-indigo-600">width 64</div>
      <div className="w-48 bg-indigo-700">width 48</div>
      <div className="w-40 bg-indigo-800">width 40</div>
      <div className="w-32 bg-indigo-900 text-gray-50">width 32</div>
      <div className="w-24 bg-indigo-950 text-gray-50">width 24</div>
      <div className="w-1500px bg-indigo-500">width custom</div>
      <hr />
      12. height 
      <div className="h-full bg-indigo-300">height 96</div>
      <div className="h-96 bg-indigo-400">height 96</div>
      <div className="h-80 bg-indigo-500">height 80</div>
      <div className="h-64 bg-indigo-600">height 64</div>
      <div className="h-48 bg-indigo-700">height 48</div>
      <div className="h-40 bg-indigo-800">height 40</div>
      <div className="h-32 bg-indigo-900 text-gray-50">height 32</div>
      <div className="h-24 bg-indigo-950 text-gray-50">height 24</div>
      <div className="h-1500px bg-indigo-500">height custom</div>
      <hr />
      13. justify content + gap
      <div className="flex justify-start bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">1</div>
        <div className="p-2 rounded-lg bg-sky-500">2</div>
        <div className="p-2 rounded-lg bg-sky-500">3</div>
      </div>
      <br />
      <div className="flex justify-center bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">1</div>
        <div className="p-2 rounded-lg bg-sky-500">2</div>
        <div className="p-2 rounded-lg bg-sky-500">3</div>
      </div>
      <br />
      <div className="flex justify-end bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">1</div>
        <div className="p-2 rounded-lg bg-sky-500">2</div>
        <div className="p-2 rounded-lg bg-sky-500">3</div>
      </div>
      <br />
      <div className="flex justify-between bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">1</div>
        <div className="p-2 rounded-lg bg-sky-500">2</div>
        <div className="p-2 rounded-lg bg-sky-500">3</div>
      </div>
      <hr />
      14. padding
      <div className="pt-6 bg-slate-500">padding</div>
      <div className="pr-4 bg-rose-500">padding</div>
      <div className="pb-8 bg-indigo-500">padding</div>
      <div className="pl-2 bg-teal-500">padding</div>
      <div className="py-2 bg-sky-500">padding</div>
      <div className="px-2 bg-gray-500">padding</div>
      <div className="p-[50px] bg-purple-500">padding</div>
      <hr />
      15. margin
      <div className="mt-6 bg-slate-500">margin</div>
      <div className="mr-4 bg-rose-500">margin</div>
      <div className="mb-8 bg-indigo-500">margin</div>
      <div className="ml-2 bg-teal-500">margin</div>
      <div className="my-2 bg-sky-500">margin</div>
      <div className="mx-2 bg-gray-500">margin</div>
      <div className="m-[50px] bg-purple-500">margin</div>
      <hr />
      16. border
      <div className="rounded w-40 text-center border-2 border-rose-500"></div>
      <div className="rounded-md w-40 text-center border-8 border-indigo-500"></div>
      <div className="rounded-lg w-40 text-center border-2 border-teal-500"></div>
      <div className="rounded-full text-center border-6 border-sky-500"></div>
      <div className="rounded-[100px] w-40 text-center border-[3px] border-slate-500"></div>
      17. flex
      <div className="flex-none w-14 h-14 bg-sky-500">flex none</div>
      <div className="flex-initial w-64 bg-violet-500">flex initial</div>
      <div className="flex-auto w-32 bg-sky-500">flex auto</div>
      <hr />
      18. cursor
      <br />
      <button
      type="cursor"
      className="cursor-pointer bg-rose-500"
      >submit</button>
      <br />
      <button
      type="button"
      className="cursor-progress bg-rose-500"
      >saving</button>
      <br />
      <button
      type="button"
      className="cursor-not-allowed bg-rose-500"
      >confirm</button>
      <br />
      <hr />
      19. shadow
      <br /><br />
      <div className="bg-cyan-500 shadow-sm">subscribe</div>
      <div className="bg-blue-500 shadow-md">like</div>
      <div className="bg-indigo-500 shadow-lg">share</div>
      <br /><br />
      20. display
      <br /><br />
      <div>
        when controlling the flow of text, using the css property
        <span className="inline bg-slate-500">
          display: inline - lorem ipsum dolor sit ame consecetur, apdicising
          elit. Aliquid volupatem mollitia dolore facilis.
        </span>
      </div>
      <br />
      <div>
        when controlling the flow of text, using the css property
        <span className="inline-block bg-slate-500">
          display: inline-block - lorem ipsum dolor sit amet conseceteter, apdicising
          elit. Aliquid volupatem mollitia dolore facilis
        </span>
        will cause the text inside the element to wrap normally
      </div>
      <br />
      <div>
        lastly, using the property{" "}
        <span className="block bg-slate-500">
          dispaly: block - lorem ipsum dolor sit amet conseceteter, apdicising 
          elit, aliquid voluptatibus molitia dolore facilis
        </span>
      </div>
    </div>
    </>
  )
}

export default App;
