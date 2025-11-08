import React, { useState, useEffect } from 'react';
import { Menu, X, Github, MessageCircle, Mail, Phone, ExternalLink, ArrowRight, Code2, Zap, Linkedin } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [scrollY, setScrollY] = useState(0);
 const [contactForm, setContactForm] = useState({ fullname: '', email: '', phone: '', service: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!contactForm.fullname.trim()) {
      alert('Please enter your name');
      return;
    }
    if (!contactForm.email.trim()) {
      alert('Please enter your email');
      return;
    }
    if (!contactForm.email.includes('@')) {
      alert('Please enter a valid email');
      return;
    }
    if (!contactForm.phone.trim()) {
      alert('Please enter your phone number');
      return;
    }
    if (!contactForm.service) {
      alert('Please select a service');
      return;
    }
    if (!contactForm.message.trim()) {
      alert('Please enter your message');
      return;
    }

    // Save to browser storage
    async function submitData() {
      const formData = new FormData();
    formData.append("access_key", "aec8c1d2-f6ca-4e0b-846a-4528b274954a"); // apna Web3Forms key yahan lagao
    formData.append("Full Name", contactForm.fullname);
    formData.append("Email", contactForm.email);
    formData.append("Phone", contactForm.phone);
    formData.append("Service", contactForm.service);
    formData.append("Message", contactForm.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setFormSubmitted(true);
      setContactForm({
        fullname: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      setTimeout(() => setFormSubmitted(false), 3000);
    } else {
      alert("Something went wrong. Please try again!");
    }
  };
   submitData();
};

  const skills = [
    { name: 'HTML', level: 'Expert', color: 'from-red-500 to-orange-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', level: 'Expert', color: 'from-blue-500 to-cyan-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', level: 'Expert', color: 'from-yellow-400 to-yellow-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', level: 'Advanced', color: 'from-cyan-400 to-blue-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', level: 'Advanced', color: 'from-green-500 to-emerald-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', level: 'Advanced', color: 'from-gray-600 to-gray-800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', level: 'Advanced', color: 'from-green-600 to-green-800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Tailwind CSS', level: 'Advanced', color: 'from-cyan-500 to-blue-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', level: 'Advanced', color: 'from-purple-500 to-pink-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'PHP', level: 'Intermediate', color: 'from-indigo-500 to-purple-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'MySQL', level: 'Advanced', color: 'from-orange-400 to-red-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git', level: 'Advanced', color: 'from-gray-700 to-gray-900', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  const projects = [
    {
      title: 'Chat Application',
      desc: 'Built a real-time chat application with instant messaging, user authentication, and seamless communication features using modern web technologies.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      link: 'https://github.com/MuhammadAnas567/Chat-Application.git'
    },
    {
      title: 'Real Estate Property Management System',
      desc: 'Developed a comprehensive property management system with listing management, client tracking, and transaction handling capabilities.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      link: 'https://github.com/MuhammadAnas567/Real-State-property-Management.git'
    },
    {
      title: 'POS Management System',
      desc: 'Created a complete point-of-sale system with inventory tracking, billing, and sales reporting features for retail businesses.',
      tech: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
      link: 'https://github.com/MuhammadAnas567/POS-Management-System.git'
    }
  ];

  const services = [
    {
      title: 'Responsive Frontend Design',
      desc: 'I will build a fast and fully responsive front-end design tailored to your needs.',
      image: 'https://saaddev-portfolio.vercel.app/assets/GigImg3-CWi47vFe.png'
    },
    {
      title: 'Custom Website Development',
      desc: 'Tailor-made websites built to match your brand with clean and scalable code.',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUSEBAWFRUVEBUWFxAVEBIVGBgYFRcWGBYXFRcYHSggGBolHRUXIjEiJSkrLi4uFx8zODMtNygtLy0BCgoKDg0OGxAQGi0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALkBEQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECAwQGBwj/xABJEAABBAECAwQFCAUICgMAAAABAAIDEQQSIQUGMRMiQVEUMmFxgQcjQlJTkZOhkrHB0dIVJFRzgpTC4jNiY3KisrPh8PEWo+P/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QANhEAAgIBAgQDBgQEBwAAAAAAAAECEQMhMQQSQVEiYaETcYGRweEFFLHwMtHS8SMzQlJygqL/2gAMAwEAAhEDEQA/APIkRF6xqEREAREQBERAEREAREQBERTQCIiUAiIlAIiJQCIiUAiIgCIigBERAEREAREQBERAEREAREQBERAEREAREQBERAFtRuayMO0Nc5z3NtwsANDDsOlnX1PkPatVZ3/6Jn9bL/ywrPIrpef0bJiV9KP2Uf4TU9K/2cf4TVIcq4LZ8ns3xiT+b5LxGXlgc+KCR8Yc4OaQNTRe4Upn8uufCwtw2wTPzIoI2x5JmZJ2ocKfb39kQ4MolwvUdjVijjjTqv0HOzm/Sj9nH+E1PSj9nH+E1TOTyo8N1RyF4bLHHIXQSxBvauDGvZrHzjNRq9juNqNrHxHl5sfbtiymzSYz9MsbYpGbdqIbjc716e5rT09baxupSx9hzsivSj9lH+E1PSj9nH+E1TmXyjJG2S5CXwC5m+jTNa1ocGyGORwDZSy9xtYBLSVuce4fjtyvR8dsThFhzudqhlafm8QzanuD++86XFp2DSRYI2Vax9ERzs5f0r/Zx/hNT0o/ZR/hNU9Ny1C5+LHj5Bc+fH7VwdC7YASucWBtlxqIgRgWTW+6heKYjIX6GSOftuHQPhe02e65jr36HYnqrKON9CedmP0o/ZR/hNT0o/Zx/hNUpkcvhpkjGSx2RCx7pMcMfQEQLpWskOz3sa1xIoDuuomlm5sgxoRBFj6HfzeKR0nYvY9xkiY/U9znEODi4kNoaaARRxt0kOdkRrD2PtjQWtDg5rdP02NIIGxFOvzse9aiz4/qy/1Q/wCrEsCvBU2l3+iDCIiuQEREAREQBERAEREAREQBERAEREAREQBERAEREAWd/wDom/1sn/LEsCKsldeX8vuDe4NxAY8ut0faNMU0Toy8sts0T4nd4AkGnlbzOPiEVh47YD2sUjnmR8zi6B+uMDVTQ0O39WzQ3rZQaUjgm9SKJzL4+HlhbBoIlZI7+dZD2ksIOljHOpjL331EUKI8dV/FnF+U8NAOTd0T3LyI8i2+e8YHxUdSUihFE8pN8V5iOSx+qIiWT15BkzlhJNucyHVpaXeN23c0BtWGbjjnZMmR2YBkgliLLNAS4zsYkHzAdq96iqSk5FVDlJY8Yjc2AS4rZHQsEevtpWaowXuaKYRpeC/ZwP0RYO92cc4w7K7MaS1sTC1mqV8slOdqOqR2536AAAKLKKVFXZFE5k8wB/aSDGjbkTMe2TIDn0RKC2VzIidLHva4hx3HedQbe0dxHNM7muLQNMEMVA3YhjbGD7yG2tREUUthRng9WT+rH/ViWBERRpt9yQiKlqQVREUgIiKAEREAREQBERAEREAREQFF6dDw/hvB+H42TmYgzMnMZ2jIXuLY2RkNduKIsBzdy0myaoLzJek4vG+F8U4fj4nEp3Ys+I3RFkhhex7A0NAdQNbNbYNbtBB3IWWW9O3WvtrRVkZkM4fxfKxYMHEODNK9zZTq1wimkt0MFWe71Gnr0PUa/BuRZMnik3DhkNa6HtLmMZId2bmjZuqxerz8Fu+l8I4Zm4c2DPNkuhlJyJCzSxzXAt+bBAOoBx2Gx87XZcI45y/jcSl4g3iD3PyGv+bMMmiPWWudZ0XZLRQ8LPvWbk0vCnVafMg4PhHIokxRmZWfDiQvlfHG6RrnF7mOc07AjSLY7xPQqf5F5Cwch2aJsuHIELS2N0Uz2gdxr+3Oki47cW72LjcruR+YoIMcNPGjB89I+TDlwTPGWmQkCJ2xGptE0Tu47eebhPOXCmcVzHNaYMXKxhEJWxEDWNi8xgW0O1Hw8ATVlVk8jta/Ias5jhXIT8mXI05mOMXG09pxHV8yS5rXUzfvEXR3AHxCcZ5DkgEEsOTFk42RM2FuVFdNe52mnts14+PUEbGlM8F4nwuHHy+EzZjn40z2SR8QZA8VI0RktdGbNB0baO4IvcK/N5h4fiYePw7DndkNGdFPPluicxo0SNcQxp3+iOl7NO5JVuad/bpW/vJ1Kv8Akhc2Y454njCct1RY5BD5ABZJbqto2d0DtmkrUf8AJZN2UujOx5MqGPXJgsdqe0VdF17OrzaBdb+K3uIc0YT+ZIs1s147Q25tD9qhe092tXUgdFTlDmjDg41n5Us2mGYZHZyaHnVrla5uwFiwPEKLyel7edE1I8+4PkRR5EUkzBJE2VhkjcLDo7GsV492/ivSuI8hxHmGKCOMDEkjbk6B6gjY2ns/3S9rQfZKvKo290A+QXrcHygYo4IGl/8AP2Yb8RndfqDXOazXrqvUax/Xq1Xy8ypx9xaSZq8xclY8vGcFuGxoxMyNko0DuaIu9Np8gWaPjItHinKMWZl5k8T4MHAx5uwEzmnSXsprgxoI1Euvex1bVqX5N59xMbhWmZw9LxY548ZpY8lzXgOZTgKAum7noxR/IPOUMWDJgz5LsZ5lMkWYIGzi3UXCRjgfEHfyPUEb5/4i+Gn82VqSNXg3J7sPimA50kWVjZE3zeRGNUb6adTXNNgH2b9PYaleZvk5bk8QyW4+fisnc8vZw/o4N0ggGj3SRvWk7G1gy+bIhxDADuJuyseCbtJZDhshYx9ObcYY0OIIduN68ze2+OKcCZxN/FRnyuc17nDEGO+3SFhj1NcRuwg2Aaonc+CNzu/LsHe55FmQOjc9j2lr2Oc1zT1a5pIcD7iCvX+eZ+EcLlhhPBYZhJjtkc8SdmRbi0gDSbPdu7HVeVcczjlZE85bpM00kmm+mtxIF+NXVr1HnLK4DxSWKaXir4jHjtjLGY0jrolx3LOverp4LTJvG0/OhJbEBzZybBJHhZfCWP7LNeIm4z3FxZKb21Ek0NLwbJrQTddLZ/kyd85FBxHGny4mFz8FhId3fWa1xO7h5EDwulu8R+UDGgmwIsCFxxMCTVb9nylzXMc4A9Dpe82atzugAU7xXnbGPa5OPxyRmpjjHhjhsJkbIRs1z3M3ZfmR/vLO8qSX3fxK6nFcM5DD8SLLzM+DDZPfYiRrnF4HiaIDfPx2IUpy5h5EXDeLx4+RjSQxgiSTsXSGQaHbwyagGihsSHC9x5mR5M5oghx4hLxssAJfPhTcPMzbc8ucyF4ALQQT01bm6HRazebOG9hxlsPzLcsNGPB2bhqqItcQGimanW6jVakk5u01f9w7IrF+TgjHilzM/GxHztDoYJj3nA1Wo2NPrDoDVi/JZJvkxmZxKHAdlM1y4zpu1ETiG6dQLa1b+r1tdBneicWx8SbPxOINmZjtY0Y2OXx5LfDQ/SQ2yCdy2tR6iipjmXjmLh8x40mRII2R8NLXGnO0l5k0tOkE3/2T2k7rrr0Fs4rK+S6QQzug4hjzz47S6XEjNuaBZIvUadsdiBuKteegr0T5PuZMTFz8+bIm0MmjnEbtLzqL5dTdgCRY33XnTBsPctoOVtS8iysuREWpIREQBERAEREAREQBERAECK8BSErACAKoCqAql0gAq0qgK4BTRpRbSrSrSrSWTRbSUrqVKSxRbSUrqSkQosVKV1KtIRRjRXKhUFWiitVyFCpYQqK9WFWKsn+Hc68UxoxFDnStYBTWW14aPAN1glo9gUJlZMkr3SSvc97jbpHuLnOPmSdysaKqilsitBERSSEREAREQBERAEREAREQBEV0bLNKQlYAVwCzOxXAWNx7Oo94WIBRJNbmiVPUqArwEAVQE2NEgAq0qgK6lBdItpKXYckwYeSyXEnYxssguLILW6gdu6CfEEXXiC4KF43wHJw3ls8ZAvaUAljvItd0+HULkx8ZCWeXDy8Mlsn/AKl3j37Nbp9C/JpZE0q0qgb1+Z6fFbw4LkOPcaHj67JI3N99g7fGl3KDIUG9iPpWkKYzuX5IYe0e9l2LjDrIv29CfYLUQtPYsSxuO6LaVFeqKjxtFHEtpWrax8N72SPaLEYBcPGiSLHupSMHLczpjESGhkbXySH1WBwuj5nqK9hVaZXlbIMop7lnlXJ4lK5mK0aWAl0ryWsaN9IcQD3j5D9QUTn4UsEropmFkjHU5jhRB/aD1BGxBBCpaujNmsVarlQqSpYiuKtUlQiIgCIiAIiIAiIgCIiAIiIAskL6KxhZAl0THckYshoHX4LSJs2fFWBZArym5JWbXZUBXhVbGfJTORy88F3ZuDg2rPS7NDT53ufcCsZyUP4tDqwYMmVPkV1V99SHAVxaRsRXsIWQxuYdwQQfEeS3IZ2zZDHZTi2MuAe5jdw0eQ3/AGpzaWtfcSoJJp2n2r9f7EfX/tbfEOM5M7WsmnkkawU1rnkj3nzPtNlTnH+VHRVLjOMsDxbXs79Cr3I8Pb9/t5vsR9b9SzwZuGzJZNHW1rVPrvs+hSb5HTLcScxyNeOrXAjYHp7CCLU9xLmyR/qWfadgP7PiVB9i3636lTsG/W/Uuz20G7stj4x401F7+Wpe3I7SRpyHOLbokHcA+LR0260t/i3DZMUNcx4fC+9EoAo3Ro+R7o+73hauPhxu2MhB9wr77UjHglrHRjIdod1ZQLb63R6Hbr1R5cb8/gZfmIW7epDDMku9Xjfqt+sXeXm4q7GZJO5sTSCSQGg0Nw0gC68tlIjgIPSQ/oLNDwBzXBzHPtpBBEZ2INgqFPEtl6Ee2i+pNcoCNmO7tW6SyR0UgcPoyFpGr2XfwtdNDwJ3EHSRNcY43OBle2i5wGwHsFN9536DrzeZ2sjy4QuBki7ORojeWvr1SQOhBv4Gl6d8nuVA/GcyDHEHZvpzAbskesTQJcaIN+Sw4jPUbiay4mChyw1MnCeGw4sUcGOzRG11tbqOuR+9vkI69PPfYLQ5x5WxsvTPOxrpYm05wLmhzbsNdXrVd/EqfysmNjzp9Z19699uobfhtv5b+K12Nc94DvUc0tLSaFO2IA/auHHzQaytpJdX18uxyqClautDy7F5KwQXbvfqGwdIO7vfd0gG/fa4TjnB5caV7XRuDA8hshBLSDenvVRNeHvWd/FcjFyJA2aQhkr26ZHlxIa4jvbkB23UeK7LnjKJ4e0ll9qY7NHuWNer2dK+K9prHOLcVVHH44SWt2eZqwq8qhXMbtFqIiEBERAEREAREQBERAEREAC3mYdC3mr+iOvx8lq48mlwPkpWSQEddj4rXHFSuzXGrI+RlFVZ1VZH30RZtpStGnU3e2oaa3VMXMkjvQ8gHq3q015tOx6n71rteaqzXvVzQtMuX2ipo1x+F3HQnYeNscNORC1w82jf94+B+CwyYMT7MDtvqE2a9o6/ko5kZR7CFyRxRvwOv0PRXFOX+alL37/NancfJ7KYDIyUtolhELnAtdWvVQPW7bfuC7fF5ekklcDjMja4B8b2ttjmneierXC6o9fBcFytwps+KXSOJd2hDTe9BrRRvrvfVeycv8LyMOHsnTdvTiW63OaQ3amgm+g/8CzyuWCpxSTlu1123XkebnlgcW8b/wCslqv+Mlp706NGLkwULkANdBEDXxtXHk0DpKPd2QH+JT2TxOOM0bJ8QKNe9a2RxCQxSPiYDpA0jqfC7Hs3PwULieI/3focCwyetbkR/wDEnVtIL8tH7bQ8vdm4D0kDz7v7NW63cXi8gxi+caXay1p01Yob18SFGx8Wgfv2zfi4D9a2jPiG2nLRdtfoX/KvW1sb8XAXOv54V4EMu/8Ai2WQ8uH7b/6/8y5zP45dtilDW9C4PAJ/7LRxOJuidqZKAb+uN/eto4c0lfPX79CXwel6HR8S4W6BjXF92/TWmq7rjd3/AKv5rkuXcuWHLy4YgB2jidRs6a1uBDR6xp3sHt8+04hxSKfDbJrYHamkt1tsHVoNC/b9y8w49w9kuadR7vclAB2dTQBfssErmcpPE3k3Tf76GfDYebOscdG9PU7SOWOKi+QOfRuQua5971TWWGdengNrVYeOxkkNa9xaQdTqaDe9g7nr50V5JzBzFkMncyM6Qw1VdfaVLwcRlmwxkNkMUjGvdYrS7RdhwOxB0/evOlwMJ5Y5uLua6Jt0r1VRVJVpWh7a4TDyzhik3Ja66J1ubU/JkcuXJkTSBwkmfJ2LGaW25xcQSXEkWfiornXmdj2SYsQOzw17+gphstA94A+BXMY/HcqMuc2d4LhROq+pva+ij3uJJJNkmyT1JPUle9LJFKoI8hwTdlhVCqlUWQZaiIhUIiIAiIgCIiAIiIAiIgKhXhWtVwRlkXNUxw/hYdfbFzPKtJv3/korsnaNek6dWnV4aqBr30QuihltoPm0KNUdnDpXbVm3iYOM/GjgMWnIM415QJPcLjs0E+RHgOi2p+V44ZjGXvIFEnugkEA7LQhkog+S9U4bw5k+YyRwtvozZK8CQ6hfs3B+AXHlrh8M52971d79F2XZdDR1DIm/4afz0o5WL5Ocp7vmS10Za1zJXnRYcLFt3IO+6iOZOUMrDaXTRdz7Rh1N+JHq/EBe+xKJ54k08OyiOpx3tHveNI/WvI4f8QyuSbr3HP8AmpJ00jz3kPH/AJvjt+vKD+lL+4r1meVrhVkEHYjz/avO+ScejiMPUMjv3tj1H9S9L7Bn1Qvd43SUY9kcktGQv8nR/aO/RCqzELDccz2+5jDfvtbmknoBV+SxZLiAzSBbtV2B4LntvSy35uUtL+aX1TIrmGHUztHvc7TQDQ0NG5AvqfNUyOGQRYPbMxzI9uO14Zrk7x0jbYq/jBf2Lw/T6t7AeDgqR8Tw5cFsE0hAdjNjeAySx3AHUdNWN/uWsZSio03V612+FESyypLoumy9CBw8sP06uHloLL9fI23rx+KmMfEhducWhpBvtJvGtuvtWji8M4VGGhs8uzCBbX9HOJ+z83FSjJuH6OzEzqDR9CS6Bv6i68vEQb8HN/6/qZWeZyi2sMU608Uqfvvb96G/hcHxtQc2OiBYqWQ/tXjnyiO9Gye6SC0kM69IpXGr9zwF69g5uHG62yuJIDd45PZX0euy8o+VsxyvE0Ztpe8NdRF642OOx9sZ+5c+KUpSkpW1S3vuu5TE+WcZVT8iF4jlcNmc18htxA3HaA15PpRnNPFI3tZDju7jbsNFNPTSB5gbrn3LZ4njxRvAhl7RugEuqqO9j9X3qfYxhJat1sexxH4k5Xj5EnLdpPpvb2XxNJbMMAI3vfxC1yr4py32reHLepxKuoycYs3ux5/vCwNaSaAsnwWbKn115BY4ZSxwcPA/+1MlHm02M5eRsP4e4eIuui01v5PEbPdHxK0CVfKoJ1Ar0QREWQCIiAIiIAiIgCIiABZAsavifRBoGjdEWD7x4hCUdJylkxO7TFnoMnA0uP0ZBsPcTtXtAWbJxex0MPXsmX76p35gqT4K/AyIgJIsVr63aD2Rv2ahf3ErS45GWOaLZpAIbpm7U1ZPeNA/S8R8StILVI9PDHwXuabZF6Pwfjwxm4WQ71Cx0Mh9nd3+BZf3rzHUuh7XVwsf7LJr9If/AKK+Thlkg4S2ZOSKfLfevme8DKbWq9jvY6UehC5v5SMq+GyBp3kLGj4uv/CoDlHjLn8PZG495ttb4ktadthZ2G3TwWjzzx1pjgheXMZqtzzG71g2m0Ksjd117F8hi/D8+PiVGStKW/TQ45witE9TpuWHRjKZ3mgMY47uA2A0/wCJdx6ZF9oz9Nv7186yZGKOmUw+6OX9rVZ6Vi/0hn6En8K+hzRlmnzUc8oOTv6HvjcsAUJGfps/esWZkDuaHssB302Hr7yvnzJiw3bidgP9XJR/4VZj8NikvROx2kWajl2BNfV8yqrDJO/oZLC466n0AHtlJEz2lpYR67B7R0PmtEcNgqu7X9aP4l4OcfH/AKTH+HL/AArLj8PhkNMyIyav/Ryfw+1WUJx20+DJcGe8v4bigMrReij89/mV+Lw/E12/R0q+2/zL5/di44NHJjsH7OX+FW+jY/8ASY/w5f4U9nkqtfU28XLy16H0i3BwBuCz8Y/xLyPnPR6M0ktd2czDpsHbdh2/tLivR8f+lR/hy/wqdweWRNG14liDeutrJtbh7nd33dFfFHJFSi7d+8z9k20+3kdnHy/w2S2vxItLgRbW6CCPJzKIXkGZwuRmTJjgEuZI5vgLAOzj5Aij8V6pwrXG0sddB1tcSDd9Qa8b/WoHjjGjIMg9aRrGu97LF/dX3LTLieHHJrWmvU9bBw64niorZSWvlX1Zxz+X8gfUPuf099ha+bwmaIW7T49HX0+CkZOJyidrb2L60V4XSzcddbP7Lv2LjjkyqSUq1PRnwHByx5JY+a4aavrVnNFWlVVB1XZVnzRaqqQhY3TutKVtHZaSxuKsqmWIiLMkIiIAiIgCIiAIiIAqhUV7XAeCA3eF5EEbrngMo8B2ugD3ijaks7jUMgAhwWw0b1NILjtVGgNvH4KJinYPBbcWZGOoRZHHVHRjyOO36Ip6a49GH8lv4nEJxDJCI2Fsjg4l12CK6UR5BUi4jD4tC2o+LY/iwK0uIys1eWUt5EjwPi2RBHoETTuekoaKO+4uz18StPmGabK0/NhmnUTUocD0rbwoX96fytjfUH3lY3cRxj9H8yufxN2Z8kebmIh3DZh9Hxr1h56f1rH6DJ9X8x5E+f8Aqn7lLOzcc/R/MrE7Ix/q/mVrDnXX0L8y/bNLD4VkTX2ML5Kq9DC6rurr3FdbyzwGeLGnfNC9hLmNAcwg0CDe/hbvyUFBxBkd9m57L66JHtuul0d+qyv4uXCjNKR5GeUj9a1nJyVaeplNuSo6qbkaOdrZCJI3lo1aQKJ8yCNj7lI8O5SigbpZE431e/vOPxAFD2ALhRxk/bTf3iX+JU/lk/bzf3mb+JUcZNVzGTjNqmzJzFyvlNypOyxZXMLg5pbG4jvAEgH2EkLn5MSRrixzCHA0WkUQR1BHgpz+WT9vP/eZf3qKyHxONm+pJsuNk+JvxV1kcVW5uuZLdfNmsYHeW3iRRrwshdr/APJ8dkbY4+0AaA0dzoAKXKsfj1vr/wB3dWF8Xl+ZTFxElJtL5o0njlCKlzxd9E9fjoS/D+ap2z3M8uit3d0NsDfSdgCT08fNZ+L8wQS7s137WV7/AB8lzpfH5fmrDIz/AMKs8rcXF00+5njzzxyU4OmjfdxOK7DTfno3WDOz2PaQNXQ+C1TI1YjI1cqwxTs7Mn4txE4uLqn5fcwFWgrM54VhcFqeUy8SDz+FLE42hKorSm5KmAiIqAIiIAiIgCIiAIiIAiIgAV4Kxq8ISi4FVVgVyii6LrVbVAqqUWLrVLVquQkWloiigVtUtFapBdaoitKiiAqKpVpQqy5WlVVpQgqrSqlWqSoREQgIiIAiIgCIiAIiID//2Q=='
    },
    {
      title: 'Modern UI/UX Website',
      desc: 'I will develop a modern front-end website with a sleek, mobile-friendly interface.',
      image: 'data:image/jpeg;base64,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'
    },
    {
      title: 'Database Design & Management',
      desc: 'I design efficient databases to ensure fast data access and scalability.',
      image: 'data:image/jpeg;base64,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'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Anas<span className="text-white">&lt;/&gt;</span>
          </div>

          <ul className="hidden md:flex gap-8">
            {['About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group text-gray-300 hover:text-white transition"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-orange-500/30 p-6 space-y-4">
            {['About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block hover:text-orange-400" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden z-10">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">

          {/* Text Section */}
          <div className="space-y-8 flex flex-col justify-center items-center md:items-start">
            <div className="space-y-4">
              <p className="text-orange-400 text-lg font-semibold">👋 Welcome to my portfolio</p>
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                <span className="text-white">I'm a</span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  Full Stack MERN
                </span>
                <br />
                <span className="text-white">Developer</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-md mx-auto md:mx-0">
                Crafting modern, responsive web experiences with JavaScript, React, Node.js & MongoDB
              </p>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-bold text-lg overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <a href="#services">Hire Me</a>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                </span>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative w-120 h-120">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-pink-500/30 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-3xl border border-orange-500/30 flex items-center justify-center">
                <img src="https://saaddev-portfolio.vercel.app/assets/Hero_Image-z6nGokxF.png" alt="" />
              </div>
            </div>
          </div>

        </div>
      </header>


      {/* About Section */}
      <section id="about" className="relative py-32 px-6 border-t border-orange-500/30 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <span className="text-gray-400">About</span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  I'm Muhammad Anas Zia – a passionate Full Stack Mern Developer crafting beautiful, responsive, and high-performance web applications.
                </p>
                <p>
                  With expertise in JavaScript, React, PHP, Node.js, Tailwindcss, and MySQL, Mongodb, I blend aesthetics with functionality to create exceptional digital experiences.
                </p>
                <p>
                  Always exploring new technologies and pushing the boundaries of web development. Let's build something amazing together! 🚀
                </p>
              </div>
              <a
                href="/Anas-Resume.pdf"
                download="Muhammad_Anas_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition"
              >
                Download Resume
              </a>



            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl">
                  <h3 className="text-4xl font-bold text-orange-400 mb-2">10+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl">
                  <h3 className="text-4xl font-bold text-blue-400 mb-2">1.5+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="p-8 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl">
                  <h3 className="text-4xl font-bold text-pink-400 mb-2">100%</h3>
                  <p className="text-gray-400">Client Satisfaction</p>
                </div>
                <div className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl">
                  <h3 className="text-4xl font-bold text-green-400 mb-2">10+</h3>
                  <p className="text-gray-400">Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6 border-t border-orange-500/30 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center">
            <span className="text-gray-400">My</span> <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Technologies I master</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                onClick={() => setActiveSkill(activeSkill === i ? null : i)}
                className={`relative group cursor-pointer transition-all duration-300 ${activeSkill === i ? 'scale-110' : 'hover:scale-105'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition duration-300`}></div>
                <div className={`relative p-8 rounded-2xl border-2 transition duration-300 flex flex-col items-center text-center ${activeSkill === i
                  ? `bg-gradient-to-br ${skill.color} border-transparent text-white`
                  : 'bg-black border-gray-700 group-hover:border-orange-500'
                  }`}>
                  <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-4 transform group-hover:scale-125 transition duration-300" />
                  <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
                  <p className={activeSkill === i ? 'text-gray-100' : 'text-gray-400'}>{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 border-t border-orange-500/30 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center">
            <span className="text-gray-400">My</span> <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Check out some of my recent work</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition opacity-0 group-hover:opacity-100"></div>
                <div className="relative p-8 bg-black border-2 border-gray-700 group-hover:border-orange-500 rounded-2xl transition h-full flex flex-col">
                  <div className="text-5xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, j) => (
                      <span key={j} className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full border border-orange-500/30">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-orange-400 font-bold flex items-center gap-2 group/link">
                    View Code <ExternalLink size={18} className="group-hover/link:translate-x-1 transition" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6 border-t border-orange-500/30 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center">
            <span className="text-gray-400">My</span> <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">What I can do for you</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full rounded-lg mb-4 h-48 object-cover group-hover:opacity-80 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition opacity-0 group-hover:opacity-100"></div>
                <div className="relative p-8 bg-black border-2 border-gray-700 group-hover:border-orange-500 rounded-2xl transition">
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.desc}</p>
                  <a href="https://www.freelancer.com/u/muhammadanasm" target="_blank" rel="noopener noreferrer" className="text-orange-400 font-bold flex items-center gap-2 group/link">
                    Hire Me < ArrowRight size={18} className="group-hover/link:translate-x-1 transition" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 border-t border-orange-500/30 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center">
            <span className="text-gray-400">Get In</span> <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Let's discuss your next project</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
             <form onSubmit={handleFormSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={contactForm.fullname}
        onChange={(e) => setContactForm({ ...contactForm, fullname: e.target.value })}
        className="w-full px-6 py-4 bg-black border-2 border-gray-700 focus:border-orange-500 rounded-lg text-white placeholder-gray-500 outline-none transition"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={contactForm.email}
        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
        className="w-full px-6 py-4 bg-black border-2 border-gray-700 focus:border-orange-500 rounded-lg text-white placeholder-gray-500 outline-none transition"
        required
      />
      <input
        type="tel"
        placeholder="Your Phone"
        value={contactForm.phone}
        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
        className="w-full px-6 py-4 bg-black border-2 border-gray-700 focus:border-orange-500 rounded-lg text-white placeholder-gray-500 outline-none transition"
        required
      />
      <select
        value={contactForm.service}
        onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
        className="w-full px-6 py-4 bg-black border-2 border-gray-700 focus:border-orange-500 rounded-lg text-white outline-none transition"
        required
      >
        <option value="">Select Service Type</option>
        <option value="frontend">Front-End Development</option>
        <option value="backend">Build Backend</option>
        <option value="redesign">Website Redesign</option>
        <option value="bugfix">Bug Fixing</option>
        <option value="landing">Landing Page Development</option>
        <option value="other">Other</option>
      </select>
      <textarea
        placeholder="Your Message"
        value={contactForm.message}
        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
        className="w-full px-6 py-4 bg-black border-2 border-gray-700 focus:border-orange-500 rounded-lg text-white placeholder-gray-500 outline-none transition resize-none"
        rows="5"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition"
      >
        {formSubmitted ? "✓ Message Sent!" : "Send Message"}
      </button>
    </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Have a project in mind or want to discuss web development? I'm here to help! Reach out anytime and I'll get back to you shortly.
              </p>

              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <div className="p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-gray-700 group-hover:border-orange-500 rounded-xl transition">
                    <div className="flex items-center gap-4">
                      <Phone className="text-orange-500" size={32} />
                      <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        <p className="text-white text-lg font-bold">+92 3009298403</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-gray-700 group-hover:border-blue-500 rounded-xl transition">
                    <div className="flex items-center gap-4">
                      <MessageCircle className="text-blue-400" size={32} />
                      <div>
                        <p className="text-gray-400 text-sm">WhatsApp</p>
                        <p className="text-white text-lg font-bold">+92 3009298403</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="p-6 bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-2 border-gray-700 group-hover:border-pink-500 rounded-xl transition">
                    <div className="flex items-center gap-4">
                      <Mail className="text-pink-400" size={32} />
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <p className="text-white text-lg font-bold">anuszia445@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-700">
                <p className="text-gray-400 mb-4">Follow me on</p>
                <div className="flex gap-4">
                  <a href="https://github.com/MuhammadAnas567" target="_blank" rel="noopener noreferrer" className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-orange-500 rounded-lg transition hover:scale-110">
                    <Github size={24} />
                  </a>
                  <a href="https://wa.me/923009298403" target="_blank" rel="noopener noreferrer" className="p-4 bg-gradient-to-br from-green-900 to-green-950 border-2 border-green-700 hover:border-green-400 rounded-lg transition hover:scale-110">
                    <MessageCircle size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/muhammad-anas-zia-164911317" target="_blank" rel="noopener noreferrer" className="p-4 bg-gradient-to-br from-blue-900 to-blue-950 border-2 border-blue-700 hover:border-blue-400 rounded-lg transition hover:scale-110">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-orange-500/30 py-8 px-6 text-center text-gray-500 z-10">
        <p>© 2025 <span className="text-orange-500 font-bold">Muhammad Anas Zia</span>. All Rights Reserved.</p>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
} 