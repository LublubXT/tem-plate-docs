export function HeaderWithBGImageWithTextLeftWithTextInputAndButton() {
  return (
    <div className=" h-[90vh]" style={{ backgroundImage: 'url("bg-image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="h-[90vh] flex flex-col justify-center bg-[#1717179b]">
        <div className="h-[90vh] flex flex-col justify-center w-full max-w-[1280px] m-auto px-4">
          <p className="text-left font-text font-thin text-first text-[24px] max-sm:mb-4">Some Above Text</p>
          <h1 className="text-left  font-text font-bold text-[100px] text-first max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
          <p className="text-left  font-text font-normal text-first text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
          <div className="flex flex-row mt-5 w-fit">
            <input type="text" className="py-[7px] px-[14px] bg-white outline-none font-text" placeholder="Email..." />
            <button className="bg-yellow text-third font-text px-[14px]">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
