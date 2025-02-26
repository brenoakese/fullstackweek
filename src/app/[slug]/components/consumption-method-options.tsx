import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ConsumptionMethod } from "@prisma/client";

import Link from "next/link";

// iMPLEMETAR DEMAIS PROPS DA INTERFACE POSTERIORMENTE

interface ConsumptionMethodOptionsProps {
  //   imageUrl: string;
  //   imageAlt: string;
  slug: string;
  buttonText: string;
  option: ConsumptionMethod;
}
// função precisa receber os parametros da interface acima

const ConsumptionMethodOption = ({
  option,
  buttonText,
  slug,
}: ConsumptionMethodOptionsProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        {/* Necessário uma imagem aqui posteriormente com o componente Image */}
        <Button variant="secondary" className="rounded-full">
          <Link href={`/${slug}/menu?ConsumptionMethod=${option}`}>
            {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsumptionMethodOption;
