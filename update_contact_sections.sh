#!/bin/bash
for file in $(find src/components -name "*.tsx" -exec grep -l "Get In Touch" {} \;); do
    if ! grep -q 'id="contact-us"' "$file"; then
        echo "Updating $file"
        # Use perl for more complex replacement
        perl -i -pe 's|(<motion\.section\n.*className="py-20 px-4 )bg-gradient-to-r from-\[#6abf4b\] to-\[#5aa338\] text-white(")|$1id="contact-us" $2|g' "$file"
    fi
done
