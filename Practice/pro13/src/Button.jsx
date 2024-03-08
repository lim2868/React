export default function Button({children, mode ='filled', Icon, ...props}) {
    // Todo: Build this component!
    
    // !!! Important: 
    // Wrap the icon with a <span className="button-icon"> to achieve the target look
    // Also wrap the children prop with a <span>
    let cssClasses = `button ${mode}-button`;

if(Icon)
{
    cssClasses +=' icon-button';
}

    return(
        <button className={cssClasses} {...props}>
            {Icon && (
                <sapn className="button-icon">
                    <Icon />
                </sapn>
            )}
            <span>{children}</span></button>
    )
   }