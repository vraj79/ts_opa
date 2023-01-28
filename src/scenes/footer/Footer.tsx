import Logo from "@/assets/Logo.png";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            ullam blanditiis pariatur veritatis fugit numquam cum quos enim
            ratione distinctio.
          </p>
          <p>© 2023 EvoGym, All rights reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Links</h4>
            <p className="my-5">Lorem ipsum dolor sit amet.</p>
            <p className="my-5">adipisicing elit. Laboriosam, magni?</p>
            <p>Lorem ipsum dolor sit.</p>
        </div>
        <div>
        <h4 className="font-bold mt-5 md:mt-0">Contact Us</h4>
            <p className="my-5">Lorem ipsum dolor sit amet.</p>
            <p className="my-5">+91 7903467310</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
