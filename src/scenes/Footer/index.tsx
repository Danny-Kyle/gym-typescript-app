import Logo from "@/assets/Logo.png"

const index = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt:0">
                <img alt="logo" src={Logo} />
                <p className="my-5">
                Phasellus sagittis arcu purus. Pellentesque sed sapien porttitor turpis mollis placerat vitae eu mi. Sed in arcu non orci faucibus laoreet. Nunc auctor a sem facilisis fermentum. Suspendisse potenti. Duis sagittis feugiat libero sit amet auctor. Proin malesuada urna sit amet tincidunt malesuada.
                </p>
                <p>All Rights Reserved || Okechukwu 2024, Made with Vite + React</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Contact Me</p>
                <p className="my-5">Whatsapp, Telegram any platform acceptable with this number</p>
                <p>(+234)8156131209</p>
            </div>
            <div></div>
        </div>
    </footer>
  )
}

export default index