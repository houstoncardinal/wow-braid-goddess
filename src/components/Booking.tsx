import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Booking Request Submitted!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Book Your Appointment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready for your new look? Fill out the form below and we'll contact you to confirm your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Booking Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Schedule Your Visit</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" required className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="service">Preferred Service *</Label>
                  <Select required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="box-braids">Box Braids</SelectItem>
                      <SelectItem value="knotless">Knotless Braids</SelectItem>
                      <SelectItem value="goddess">Goddess Knotless</SelectItem>
                      <SelectItem value="micro">Micro Braids</SelectItem>
                      <SelectItem value="senegalese">Senegalese Twists</SelectItem>
                      <SelectItem value="passion">Passion Twists</SelectItem>
                      <SelectItem value="cornrows">Cornrows</SelectItem>
                      <SelectItem value="weaves">Weaves</SelectItem>
                      <SelectItem value="other">Other (specify in notes)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location">Preferred Location *</Label>
                  <Select required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bissonnet">Bissonnet Location</SelectItem>
                      <SelectItem value="westheimer">Westheimer Location</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="preferredDate">Preferred Date & Time</Label>
                  <Input id="preferredDate" type="datetime-local" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Hair length, style preferences, any questions..."
                    className="mt-2"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-gold to-terracotta hover:shadow-lg text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Appointment"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Booking Info */}
          <div className="space-y-8">
            <Card className="border-gold/20 bg-gradient-to-br from-gold/5 to-terracotta/5">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Booking Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">Deposit Required</h4>
                  <p className="text-muted-foreground">$25 deposit required to secure your appointment</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Hair Preparation</h4>
                  <p className="text-muted-foreground">Please wash and blow-dry your hair before arrival, or add $10 for this service</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Walk-ins Welcome</h4>
                  <p className="text-muted-foreground">Appointments recommended but walk-ins accepted based on availability</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contact Us Directly</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Bissonnet Location</h4>
                  <p className="text-muted-foreground">(713) 995-5676</p>
                </div>
                <div>
                  <h4 className="font-semibold">Westheimer Location</h4>
                  <p className="text-muted-foreground">(346) 374-7093</p>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Call during business hours for immediate assistance or to make changes to existing appointments.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}