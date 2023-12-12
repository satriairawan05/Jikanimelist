const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="flex justify-around py-3 my-5 text-anime-primary">
        <div className="items-center">
          <h1 className="text-2xl">&copy; <a href="https://github.com/satriairawan05" target="_blank">Deuwi Satriya Irawan</a> 2023 - {currentYear}</h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
