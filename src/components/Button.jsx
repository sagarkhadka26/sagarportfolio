import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({
    children,
    href,
    variant = 'primary',
    size = 'md',
    icon,
    external = false,
    onClick,
    className = '',
    ...props
}) {
    const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    className={classes}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                >
                    {children}
                    {icon && <span className={styles.icon}>{icon}</span>}
                </a>
            );
        }
        return (
            <Link href={href} className={classes} {...props}>
                {children}
                {icon && <span className={styles.icon}>{icon}</span>}
            </Link>
        );
    }

    return (
        <button className={classes} onClick={onClick} {...props}>
            {children}
            {icon && <span className={styles.icon}>{icon}</span>}
        </button>
    );
}
