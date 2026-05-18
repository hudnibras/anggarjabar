export function getAthleteStatusLabel(status: string): string {
  return status === "ACTIVE" ? "Aktif" : "Tidak Aktif"
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    EPEE: "Épée",
    SABRE: "Sabre",
    FOIL: "Foil",
  }
  return labels[category] ?? category
}

export function calculateAge(birthDate: Date): number {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}
