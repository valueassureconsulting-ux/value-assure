import { motion } from "motion/react"

type Props = {}

const teamMembers = [
    {
        name: "Anil Bhandarre",
        role: "Director – Sales",
        image: "/anil.png",
        initials: "AB",
        bio: [
            "Anil Bhandarre, a Mechanical Engineer from Mumbai University, has 32 years of experience across design, manufacturing, sales, and marketing.",
            "With a career spanning multiple industries — including electronics, construction, and railways — Anil has led over 1,000 projects in hospitality, IT hubs, shipping, and more.",
            "His deep network across Asia and proven success in building large-scale AI-powered systems make him a key driver of innovation at Sentient Logics AI.",
            "Anil's metric-driven achievements have highlighted revenue growth, operations scaling, and team scaling — showcasing his ability to lead, strategize, and close deals.",
        ],
    },
    {
        name: "Ziauddin Meer",
        role: "Director – Marketing",
        image: "/meer.png",
        initials: "ZM",
        bio: [
            "With 27 years of experience in leading large-scale enterprises, Ziauddin Meer brings deep industry knowledge and forward-thinking leadership to Value Assured Consulting.",
            "His track record spans sectors including automotive, banking, insurance, real estate, healthcare, and Artificial Intelligence in conglomerates like ICICI, Kotak, MetLife, and Tata AIG.",
            "Known for his ability to spot strategic opportunities and drive innovation, Ziauddin has earned a reputation for constantly delivering results.",
            "He is passionate about helping companies adapt to AI-driven transformation while aligning business goals with cutting-edge technology.",
        ],
    },
]

export default function Team({}: Props) {
    return (
        <section className="relative py-16 lg:py-24 bg-background">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 dark:bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/3 dark:bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 lg:mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-6 h-px bg-primary" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                            Leadership Team
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                        The People Behind the Work
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-1 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-400"
                        >
                            <div className="flex flex-col sm:flex-row">
                                <div className="relative sm:w-58 shrink-0">
                                    <div className="relative h-104 sm:h-full min-h-52 overflow-hidden sm:rounded-l-3xl rounded-t-3xl sm:rounded-tr-none bg-secondary/40">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="absolute inset-0 w-full h-full object-cover object-top"
                                            onError={(e) => {
                                                const target = e.currentTarget
                                                target.style.display = "none"
                                                const parent = target.parentElement
                                                if (parent) {
                                                    parent.classList.add("flex", "items-center", "justify-center")
                                                    const placeholder = document.createElement("div")
                                                    placeholder.className = "w-20 h-20 rounded-2xl bg-primary/15 flex items-center justify-center"
                                                    placeholder.innerHTML = `<span class="text-2xl font-black text-primary">${member.initials}</span>`
                                                    parent.appendChild(placeholder)
                                                }
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-card/60 via-transparent to-transparent sm:bg-linear-to-r sm:from-transparent sm:to-card/20" />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between p-6 sm:p-8 flex-1 min-w-0">
                                    <div>
                                        <div className="flex items-start gap-3 mb-4">
                                            <div className="min-w-0">
                                                <h3 className="text-xl font-bold text-foreground tracking-tight leading-tight">
                                                    {member.name}
                                                </h3>
                                                <p className="text-sm font-semibold text-primary mt-0.5">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-2.5">
                                            {member.bio.map((para, i) => (
                                                <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                                                    {para}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
