const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="flex justify-around text-anime-primary">
        <div className="items-center py-3 my-5">
          <h1 className="text-xl text-center lg:text-2xl">&copy; 2023 - {currentYear} Distributed by <a href="https://github.com/satriairawan05" target="_blank">Deuwi Satriya Irawan</a></h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
