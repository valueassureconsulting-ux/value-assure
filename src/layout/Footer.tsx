
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
    Mail,
    Phone,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
    solutions: [
        { name: 'Data Quality Assessment', href: '/solutions/data-quality-assessment' },
        { name: 'Data Quality Monitoring', href: '/solutions/data-quality-monitoring' },
        { name: 'Data Issue Remediation', href: '/solutions/data-issue-remediation' },
        { name: 'Data Governance Enablement', href: '/solutions/data-governance-enablement' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Partners', href: '/partners' },
        { name: 'Resources', href: '/resources' },
        { name: 'Contact', href: '/contact' },
    ],
    services: [
        { name: 'Platform', href: '/platform' },
        { name: 'Industry Sectors', href: '/industry-sectors' },
        { name: 'SAP Data Quality', href: '/dap-data-quality' },
        { name: 'Solutions Overview', href: '/solutions' },
    ],
}

const contactInfo = {
    email: 'info@valueassuredconsulting.com',
    phone: '+91 9967731105',
}

function Footer() {
    return (
        <footer className="relative overflow-hidden bg-linear-to-b from-background via-background to-secondary/30 dark:from-background dark:via-background dark:to-secondary/20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent dark:from-primary/10" />
            
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="py-12 lg:py-16">
                    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                        <div className="lg:col-span-3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <Link to="/" className="inline-block">
                                    <img
                                        src="/logo-transparent.png"
                                        alt="Value Assure Consulting"
                                        className="h-14 w-auto object-contain"
                                    />
                                </Link>
                                <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-sm">
                                    Value Assure Consulting delivers enterprise data solutions 
                                    that transform how organizations manage, analyze, and leverage 
                                    their most valuable asset - data.
                                </p>


                            </motion.div>
                        </div>

                        <div className="lg:col-span-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6"
                            >
                                <div>
                                    <h3 className="text-sm font-semibold text-foreground">Solutions</h3>
                                    <ul className="mt-4 space-y-3">
                                        {footerLinks.solutions.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    to={link.href}
                                                    className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    {/* <ArrowRight className="mr-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> */}
                                                    <span>{link.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-foreground">Services</h3>
                                    <ul className="mt-4 space-y-3">
                                        {footerLinks.services.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    to={link.href}
                                                    className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    {/* <ArrowRight className="mr-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> */}
                                                    <span>{link.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-foreground">Company</h3>
                                    <ul className="mt-4 space-y-3">
                                        {footerLinks.company.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    to={link.href}
                                                    className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    {/* <ArrowRight className="mr-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> */}
                                                    <span>{link.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>


                            </motion.div>
                        </div>

                        <div className="lg:col-span-3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="space-y-4"
                            >
                                <h3 className="text-sm font-semibold text-foreground">Contact Us</h3>
                                
                                <div className="flex items-center gap-3 group">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <a 
                                        href={`mailto:${contactInfo.email}`}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {contactInfo.email}
                                    </a>
                                </div>

                                <div className="flex items-center gap-3 group">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <Phone className="h-4 w-4" />
                                    </div>
                                    <a 
                                        href={`tel:${contactInfo.phone}`}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {contactInfo.phone}
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <Separator className="bg-border/50" />

                <div className="py-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center justify-between gap-4 sm:flex-row"
                    >
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} Value Assure Consulting. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link
                                to="/about"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-linear-to-t from-primary/5 to-transparent blur-3xl pointer-events-none" />
        </footer>
    )
}

export default Footer