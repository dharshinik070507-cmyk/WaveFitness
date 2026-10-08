#!/usr/bin/env bash

export PATH="$PATH:/c/Program Files/nodejs"

# Comprehensive Audit Script for Wave Fitness Design System
ERRORS=0

echo "🔍 Running Automated Audit for Wave Fitness..."

check_count() {
  local label="$1"
  local count="$2"
  if [ "$count" -eq 0 ]; then
    echo "  ✅ $label: 0"
  else
    echo "  ❌ $label: $count matches found!"
    ERRORS=$((ERRORS + count))
  fi
}

# 1. brand- token check
C1=$(grep -rnE "brand-" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l | tr -d ' ')
check_count "brand-" "$C1"

# 2. tracking-poster check
C2=$(grep -rnE "tracking-poster" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l | tr -d ' ')
check_count "tracking-poster" "$C2"

# 3. Forbidden colors (slate, zinc, gray, emerald, cyan, purple, pink)
C3=$(grep -rnE "\b(slate|zinc|gray|emerald|cyan|purple|pink)-" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l | tr -d ' ')
check_count "Forbidden colors (slate/zinc/gray/emerald/cyan/purple/pink)" "$C3"

# 4. Forbidden border radiuses (rounded-lg, rounded-xl, rounded-2xl, rounded-3xl, rounded-md)
C4=$(grep -rnE "rounded-(lg|xl|2xl|3xl|md)" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l | tr -d ' ')
check_count "Forbidden border radiuses" "$C4"

# 5. backdrop-blur (allowed ONLY in Navbar.tsx header)
C5=$(grep -rnE "backdrop-blur" src/ --include="*.tsx" --include="*.ts" | grep -vE "components/Navbar\.tsx" 2>/dev/null | wc -l | tr -d ' ')
check_count "backdrop-blur outside Navbar.tsx" "$C5"

# 6. Forbidden shadows (shadow-sm, shadow-md, shadow-lg, shadow-xl, shadow-2xl)
C6=$(grep -rnE "shadow-(sm|md|lg|xl|2xl)" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l | tr -d ' ')
check_count "Forbidden shadows" "$C6"

# 7. Gradients (scan tsx files only)
C7=$(grep -rnE "gradient" src/ --include="*.tsx" 2>/dev/null | wc -l | tr -d ' ')
check_count "gradient in tsx" "$C7"

# 8. Hover scale / scale-1
C8=$(grep -rnE "hover:scale|scale-1" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l | tr -d ' ')
check_count "hover:scale or scale-1" "$C8"

# 9. Hardcoded pixel text sizes (text-[Npx])
C9=$(grep -rnE "text-\[[0-9]+px\]" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l | tr -d ' ')
check_count "text-[Npx] arbitrary sizes" "$C9"

# 10. Unsplash
C10=$(grep -rnE "unsplash" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l | tr -d ' ')
check_count "unsplash URLs" "$C10"

# 11. Raw <img> tags
C11=$(grep -rnE "<img" src/ --include="*.tsx" --include="*.ts" | grep -vE "opengraph-image" 2>/dev/null | wc -l | tr -d ' ')
check_count "Raw <img> tags" "$C11"

# 12. goo.gl shortlinks
C12=$(grep -rnE "goo\.gl" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l | tr -d ' ')
check_count "goo.gl shortlinks" "$C12"

# 13. Hardcoded closing 22:00
C13=$(grep -rnE "22:00" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l | tr -d ' ')
check_count "Hardcoded 22:00 closing" "$C13"

# 14. Banned 'verified' word (case insensitive)
C14=$(grep -rnE "[Vv]erified" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l | tr -d ' ')
check_count "Banned '[Vv]erified' word" "$C14"

# 15. Banned claims
C15=$(grep -rnE "disinfected|smooth cable|100% respectful|No beginner|no traps" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l | tr -d ' ')
check_count "Banned unsourced claims" "$C15"

# 16. Deprecated SectionHeading component
C16=$(grep -rnE "SectionHeading" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l | tr -d ' ')
check_count "SectionHeading component" "$C16"

# 17. 'use client' on line 1 of src/app/page.tsx
C17=$(head -n 1 src/app/page.tsx | grep -c "use client" || true)
check_count "'use client' on line 1 of src/app/page.tsx" "$C17"

# 18. Red classes outside allowed components
C18=$(grep -rnE "(text-red|bg-red)\b" src/ --include="*.tsx" --include="*.ts" | grep -vE "components/ui/Button\.tsx|components/ui/PlanCard\.tsx|components/ui/HeadingLockup\.tsx|components/PricingSection\.tsx|components/PriceNumeral\.tsx|components/Navbar\.tsx" 2>/dev/null | wc -l | tr -d ' ')
check_count "text-red or bg-red outside allowed action locations" "$C18"

# 19. Run Extended TypeScript Audit Checks
echo "🔍 Running Extended Asset & Structure Checks..."
if [ -f "/c/Program Files/nodejs/node.exe" ]; then
  "/c/Program Files/nodejs/node.exe" scripts/run-audit.js
elif command -v node >/dev/null 2>&1; then
  node scripts/run-audit.js
fi
TS_ERR=$?
ERRORS=$((ERRORS + TS_ERR))

if [ "$ERRORS" -eq 0 ]; then
  echo "🎉 AUDIT PASSED WITH 0 ERRORS!"
  exit 0
else
  echo "❌ AUDIT FAILED WITH $ERRORS TOTAL ERRORS."
  exit 1
fi
