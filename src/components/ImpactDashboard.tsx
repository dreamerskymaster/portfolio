import React from 'react';
import { useCountUp } from '../utils/useCountUp';
import { TrendingUp, Clock, ShieldCheck, Rocket } from 'lucide-react';

/**
 * Props for the MetricCard component.
 */
interface MetricCardProps {
    /** The title/label for the metric (e.g., "Annual Savings") */
    label: string;
    /** The target numeric value to animate to */
    value: number;
    /** Optional suffix to append to the value (e.g., "%") */
    suffix?: string;
    /** Optional prefix to prepend to the value (e.g., "$") */
    prefix?: string;
    /** Lucide icon element to display */
    icon: React.ReactNode;
    /** Delay in milliseconds before the counter animation starts */
    delay?: number;
}

/**
 * MetricCard - A stylized card component for the Impact Dashboard.
 * Uses useCountUp hook for progressive number reveal on load.
 */
const MetricCard: React.FC<MetricCardProps> = ({ label, value, suffix = '', prefix = '', icon, delay = 0 }) => {
    const animatedValue = useCountUp(value, 2000, delay);

    return (
        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 hover-lift group border border-border/60 hover:border-primary/40 transition-all duration-300">
            <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <div className="text-primary">
                    {icon}
                </div>
            </div>
            <div>
                <p className="text-3xl md:text-4xl font-bold tracking-tight text-fg font-serif">
                    {prefix}{animatedValue.toLocaleString()}{suffix}
                </p>
                <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1 font-mono">
                    {label}
                </p>
            </div>
        </div>
    );
};

/**
 * ImpactDashboard - A high-visibility metrics section for the home page.
 * Designed to showcase key professional achievements at a glance.
 */
const ImpactDashboard: React.FC = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                    label="Annual Business Value"
                    value={200000}
                    prefix="$"
                    suffix="+"
                    icon={<TrendingUp size={28} />}
                    delay={0}
                />
                <MetricCard
                    label="Hours Saved / Mo"
                    value={320}
                    suffix="+"
                    icon={<Clock size={28} />}
                    delay={200}
                />
                <MetricCard
                    label="Systems Deployed"
                    value={13}
                    icon={<Rocket size={28} />}
                    delay={400}
                />
                <MetricCard
                    label="Avg. ROI"
                    value={819}
                    suffix="%"
                    icon={<ShieldCheck size={28} />}
                    delay={600}
                />
            </div>
        </div>
    );
};

export default ImpactDashboard;
