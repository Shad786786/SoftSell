import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Upload, DollarSign, CreditCard, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import Chatbot from "./chatbot";



export default function SoftSellPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", license: "", message: "" });
  const [errors, setErrors] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Valid email required";
    if (!form.license) newErrors.license = "Please select a license type";
    if (!form.message) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert("Form submitted!");
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "font-sans text-gray-800"}>
      {/* Theme Toggle */}
      <div className="flex justify-end p-4">
        <Button onClick={() => setDarkMode(!darkMode)} className="flex items-center space-x-2">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </Button>
      </div>

      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Resell Your Unused Software Licenses</h1>
        <p className="text-xl mb-6">Turn unused software into working capital in 3 easy steps</p>
        <Button className="bg-white text-blue-600 hover:bg-gray-200">Sell My Licenses</Button>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        className="py-16 px-4 md:px-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[<Upload />, <DollarSign />, <CreditCard />].map((Icon, i) => (
            <motion.div key={i} custom={i} variants={fadeIn}>
              <Card className="p-6">
                <Icon.type className="mx-auto text-blue-600 w-10 h-10 mb-4" />
                <h3 className="font-bold text-lg">{["Upload License", "Get Valuation", "Get Paid"][i]}</h3>
                <p>{["Send us your license details securely", "We evaluate your licenses and make an offer", "Accept the offer and get paid within 24h"][i]}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="bg-gray-100 dark:bg-gray-800 py-16 px-4 md:px-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold mb-8">Why Choose SoftSell</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {["Secure & Private", "Fast Payouts", "Fair Market Prices", "Simple Process"].map((title, i) => (
            <motion.div key={i} custom={i} variants={fadeIn}>
              <Card className="p-6 text-center">
                <div className="text-blue-600 mb-2 mx-auto w-8 h-8"><CheckCircle /></div>
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{
                  ["Your data is always protected.", "Get paid in less than 24 hours.", "We offer competitive valuations.", "No jargon, no hassle."][i]
                }</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials  section */}
      <motion.section 
        className="py-16 px-4 md:px-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold mb-8">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[{
            quote: "\"SoftSell made it incredibly easy to monetize our unused software. Highly recommend!\"",
            name: "Shad ahmad",
            role: "IT Manager, GrowInc."
          }, {
            quote: "\"We recovered thousands in value from old licenses. Great experience overall.\"",
            name: "Mr unknown",
            role: "CTO, NewTech"
          }].map((t, i) => (
            <motion.div key={i} custom={i} variants={fadeIn}>
              <Card className="p-6">
                <p className="italic mb-4">{t.quote}</p>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm">{t.role}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section 
        className="bg-blue-50 dark:bg-gray-900 py-16 px-4 md:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-4">
          <Input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <Input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <Input placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
          <select className="p-2  border rounded bg-blue-50 dark:bg-gray-900" value={form.license} onChange={(e) => setForm({ ...form, license: e.target.value })}>
            <option value="">Select License Type</option>
            <option value="Office">Microsoft Office</option>
            <option value="Adobe">Adobe Suite</option>
            <option value="Antivirus">Antivirus</option>
            <option value="Other">Other</option>
          </select>
          {errors.license && <p className="text-red-500 text-sm">{errors.license}</p>}
          <Textarea placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">Submit</Button>
        </form>
      </motion.section>
 {/* Floating Chatbot */}
 <Chatbot />
</div>

  );
}
