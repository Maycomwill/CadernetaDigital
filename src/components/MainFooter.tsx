import { SVGFooter } from "./SVGFooter";
import { Text } from "./Text";

function MainFooter() {
  return (
    <div className="bg-gray-900 flex items-end justify-between w-full">
      <div>
        <Text size="xxs" className="text-gray-500">
          Todos os direitos reservados &reg;
        </Text>
      </div>
      <div className="flex flex-col items-center justify-center">
        <a className="hover:rotate-180 hover:scale-125 transition-transform duration-200" href="https://instagram.com/maycomwill" target="_blank">
        <SVGFooter width={25} height={25}/>
        </a>
        <Text size="xxs" className="text-gray-500">
          Plataforma desenvolvida por Maycom Willams
        </Text>
      </div>
      <div>
        <Text size="xxs" className="text-rose-500 underline underline-offset-2">
          Em desenvolvimento
        </Text>
      </div>
    </div>
  );
}
export default MainFooter;
