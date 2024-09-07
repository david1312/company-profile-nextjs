"use client";
import React from "react";
import {
  TeamCard,
  TeamGrid,
  TeamImage,
  TeamWrapper,
} from "./teammanagement.styles";
import { TEAM_MANAGEMENT } from "@/src/constants/config";
import Image from "next/image";

const Management: React.FC = () => {
  return (
    <TeamWrapper id="Team" className="p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
      <div className="section-title">
        <p>Team and Management</p>
      </div>

      <TeamGrid>
        {TEAM_MANAGEMENT.map((val, index) => {
          return (
            <TeamCard key={index} className="bg-b-card">
              <TeamImage>
                <Image
                  src={val.image}
                  alt={val.name}
                  height={200}
                  width={200}
                  className="img-content"
                />
              </TeamImage>
              <div>
                <h3>{val.name}</h3>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            </TeamCard>
          );
        })}
      </TeamGrid>
    </TeamWrapper>
  );
};

export default Management;
