import React from "react";

interface DashboardHeaderProps {
  userName: string;
  description: string;
}

export default function DashboardHeader({
  userName,
  description,
}: DashboardHeaderProps) {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-primary mb-2">
        Bem-vindo, {userName}
      </h2>
      <p className="text-base text-my-dark mb-4">{description}</p>
    </div>
  );
}
