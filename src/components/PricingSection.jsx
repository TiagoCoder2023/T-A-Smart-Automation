import React, { useState } from "react";
import {
  FaCheck,
  FaWhatsapp,
  FaHeadset,
  FaDatabase,
  FaCalendarAlt,
  FaGraduationCap,
  FaCog,
  FaInfinity,
  FaRocket,
  FaComments,
  FaInstagram,
  FaTelegram,
  FaChartBar,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import ContactModal from "./ContactModal";

function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [billingPeriod, setBillingPeriod] = useState("monthly"); // monthly, semiannual, annual

  const calculatePrice = (monthlyPrice, period) => {
    if (period === "monthly") {
      return { price: monthlyPrice, period: "mês", discount: 0 };
    } else if (period === "semiannual") {
      const total = monthlyPrice * 6;
      const discount = total * 0.1;
      return {
        price: Math.round(total - discount),
        period: "semestre",
        discount: 10,
      };
    } else if (period === "annual") {
      const total = monthlyPrice * 12;
      const discount = total * 0.15;
      return {
        price: Math.round(total - discount),
        period: "ano",
        discount: 15,
      };
    }
  };

  const plans = [
    {
      name: "Starter",
      price: "390",
      period: "mês",
      description: "Ideal para clínicas que estão começando com automação",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      nameStyle:
        "text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-blue-400",
      features: [
        { icon: FaWhatsapp, text: "WhatsApp incluso" },
        { icon: FaComments, text: "2.500 mensagens disponíveis" },
        { icon: FaHeadset, text: "Suporte para problemas" },
        { icon: FaCog, text: "Manutenção bimestral" },
      ],
      popular: false,
    },
    {
      name: "PRO",
      price: "700",
      period: "mês",
      description: "Para clínicas que precisam de recursos avançados",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-300",
      nameStyle:
        "text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] to-[#0066CC] font-extrabold",
      features: [
        { icon: FaWhatsapp, text: "WhatsApp incluso" },
        { icon: FaComments, text: "8.000 mensagens disponíveis" },
        { icon: FaHeadset, text: "Suporte prioritário" },
        { icon: FaCalendarAlt, text: "Sistema de agendamento" },
        { icon: FaGraduationCap, text: "Treinamento recorrente atualizado" },
        { icon: FaChartBar, text: "Power BI incluso" },
        { icon: FaCog, text: "Manutenção mensal" },
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Customizado",
      period: "",
      description: "Solução completa para grandes operações",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-300",
      nameStyle:
        "text-transparent bg-clip-text bg-gradient-to-r from-[#000000] via-[#0066CC] to-[#000000] font-black tracking-wide",
      features: [
        { icon: HiSparkles, text: "Benefícios do plano PRO +", isHeader: true },
        { icon: FaDatabase, text: "Conexão com CRM" },
        { icon: FaInstagram, text: "Instagram incluso" },
        { icon: FaTelegram, text: "Telegram incluso" },
        { icon: FaInfinity, text: "Mensagens ilimitadas" },
        { icon: FaCog, text: "Sistemas personalizados integrados" },
        { icon: FaRocket, text: "Manutenção prioritária" },
        { icon: HiSparkles, text: "Multi-workflows disponíveis" },
      ],
      popular: false,
      custom: true,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-medical-blue/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Planos e Preços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Escolha o plano ideal para sua clínica. Todos os planos incluem
            agentes de IA treinados e prontos para uso.
          </p>

          {/* Seletor de Período */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingPeriod === "monthly"
                  ? "bg-gradient-to-r from-[#0066CC] to-[#FF6600] text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-300 hover:border-[#0066CC]"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingPeriod("semiannual")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingPeriod === "semiannual"
                  ? "bg-gradient-to-r from-[#0066CC] to-[#FF6600] text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-300 hover:border-[#0066CC]"
              }`}
            >
              Semestral <span className="text-sm font-normal">(10% OFF)</span>
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingPeriod === "annual"
                  ? "bg-gradient-to-r from-[#0066CC] to-[#FF6600] text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-300 hover:border-[#0066CC]"
              }`}
            >
              Anual <span className="text-sm font-normal">(15% OFF)</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${
                plan.bgColor
              } rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative border-2 ${
                plan.borderColor
              } ${
                plan.popular
                  ? "ring-4 ring-purple-300 ring-opacity-50 scale-105"
                  : ""
              } flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#0066CC] to-[#FF6600] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3
                  className={`text-3xl font-display font-bold mb-2 ${
                    plan.nameStyle || "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                {plan.custom ? (
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    {billingPeriod !== "monthly" && (
                      <span className="text-sm font-semibold text-[#FF6600] bg-[#FF6600]/10 px-3 py-1 rounded-full">
                        {
                          calculatePrice(parseInt(plan.price), billingPeriod)
                            .discount
                        }
                        % de desconto
                      </span>
                    )}
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-3xl font-bold text-gray-900">
                        R$
                      </span>
                      <span className="text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-gray-900 to-gray-700">
                        {billingPeriod === "monthly"
                          ? plan.price
                          : calculatePrice(
                              parseInt(plan.price),
                              billingPeriod
                            ).price.toLocaleString("pt-BR")}
                      </span>
                      <span className="text-gray-600">
                        /
                        {billingPeriod === "monthly"
                          ? plan.period
                          : calculatePrice(parseInt(plan.price), billingPeriod)
                              .period}
                      </span>
                    </div>
                    {billingPeriod !== "monthly" && (
                      <p className="text-xs text-gray-500">
                        Economia de R${" "}
                        {Math.round(
                          parseInt(plan.price) *
                            (billingPeriod === "semiannual" ? 6 : 12) -
                            calculatePrice(parseInt(plan.price), billingPeriod)
                              .price
                        ).toLocaleString("pt-BR")}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => {
                  const IconComponent = feature.icon;
                  // Cores contextuais baseadas no tipo de feature
                  let iconColor = "text-[#0066CC]";
                  if (
                    feature.icon === FaWhatsapp ||
                    feature.icon === FaInstagram ||
                    feature.icon === FaTelegram
                  ) {
                    iconColor = "text-green-600";
                  } else if (feature.icon === FaInfinity) {
                    iconColor = "text-[#FF6600]";
                  } else if (
                    feature.icon === FaCog ||
                    feature.icon === FaRocket
                  ) {
                    iconColor = "text-[#000000]";
                  } else if (feature.icon === FaHeadset) {
                    iconColor = "text-[#0066CC]";
                  } else if (
                    feature.icon === FaDatabase ||
                    feature.icon === FaCalendarAlt
                  ) {
                    iconColor = "text-[#FF6600]";
                  } else if (
                    feature.icon === FaGraduationCap ||
                    feature.icon === HiSparkles
                  ) {
                    iconColor = "text-[#0066CC]";
                  } else if (feature.icon === FaComments) {
                    iconColor = "text-[#0066CC]";
                  } else if (feature.icon === FaChartBar) {
                    iconColor = "text-[#FFB900]";
                  }

                  // Se for o header "Benefícios do plano PRO +"
                  if (feature.isHeader) {
                    return (
                      <div
                        key={featureIndex}
                        className="pt-2 pb-1 border-b-2 border-[#0066CC]/30"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <IconComponent className={`${iconColor} text-lg`} />
                          </div>
                          <span className="text-gray-900 font-bold leading-relaxed text-lg">
                            {feature.text}
                          </span>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <IconComponent className={`${iconColor} text-lg`} />
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => {
                  setSelectedPlan(plan.name);
                  setIsModalOpen(true);
                }}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                  plan.custom
                    ? "bg-gradient-to-r from-[#0066CC] to-[#000000] hover:from-[#0052A3] hover:to-[#1a1a1a]"
                    : plan.popular
                    ? "bg-gradient-to-r from-[#FF6600] to-[#0066CC] hover:from-[#E55A00] hover:to-[#0052A3]"
                    : "bg-gradient-to-r from-[#0066CC] to-[#FF6600] hover:from-[#0052A3] hover:to-[#E55A00]"
                } shadow-lg hover:shadow-xl transform hover:scale-105`}
              >
                {plan.custom ? "Falar com Vendas" : "Contratar Agora"}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#0066CC]/5 to-[#FF6600]/5 rounded-2xl p-6 border-2 border-[#0066CC]/20 mb-6">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3 text-center">
                Setup Inicial Personalizado
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                O valor do setup varia conforme a necessidade da clínica, nível
                de automações desejadas e integrações solicitadas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Preparamos uma proposta individual para cada cliente, garantindo
                que você pague apenas pelo que realmente precisa.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span>Cancelamento a qualquer momento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Contato */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan}
        billingPeriod={billingPeriod}
      />
    </section>
  );
}

export default PricingSection;
