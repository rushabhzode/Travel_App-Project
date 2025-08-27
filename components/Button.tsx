type ButtonProps = { 
  type: "button" | "submit";
  title: string;
  icon?: string;
}

const Button = ({ type, title, icon }: ButtonProps) => {
  return (
    <button
      type={type}
      className="flex items-center gap-2 rounded-full bg-green-600 text-white px-5 py-2 hover:bg-green-700 transition"
    >
      {icon && <img src={icon} alt={title} width={20} height={20} />}
      <span>{title}</span>
    </button>
  );
};

export default Button;
