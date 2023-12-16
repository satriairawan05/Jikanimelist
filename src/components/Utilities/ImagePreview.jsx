import Image from "next/image";

const ImagePreview = ({ user }) => {
  return (
    <>
      {user?.avatar_url && (
        <Image
          src={user.avatar_url}
          alt={user.name}
          width={250}
          height={250}
          className="object-cover rounded-full"
        />
      )}
    </>
  );
};

export default ImagePreview;