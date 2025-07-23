import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PaymentSection = () => {
  return (
    <section className="py-20 px-6 bg-card border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Quick <span className="text-transparent bg-gradient-primary bg-clip-text">Payment</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to get started? Use our convenient Zelle payment option for quick and secure transactions.
        </p>
        
        <Card className="max-w-md mx-auto border-border/50 bg-background/50 backdrop-blur-sm shadow-glow">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Pay with Zelle</CardTitle>
            <p className="text-muted-foreground">Scan the QR code below</p>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/492c54c7-306d-4f9d-8266-cfdd1e54471d.png"
                alt="Zelle Payment QR Code"
                className="w-64 h-64 object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Or contact us for other payment options
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PaymentSection;