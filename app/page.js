
import Modal from "@/components/Modal";

export default function Home() {
  return (
    <>
      <div className="w-full h-[400px] flex place-content-center">

        <Modal />
      </div>
      <div className="bg-red-300 w-full h-[400px] mt-8">
        <p>Contenido de la página principal</p>
      </div>
    </>
  );
}
