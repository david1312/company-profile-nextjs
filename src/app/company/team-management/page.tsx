"use client";
import React from "react";
import {
  CardContent,
  Paragraph,
  TeamCard,
  TeamGrid,
  TeamImage,
  TeamWrapper,
} from "./teamManagement.styles";
import { TEAM_MANAGEMENT } from "@/src/utils/config";
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
            <TeamCard key={index}>
              <TeamImage>
                <Image
                  src={val.image}
                  alt={val.name}
                  height={200}
                  width={200}
                  className="img-content"
                />
              </TeamImage>
              <CardContent>
                <h3>{val.name}</h3>
                <h4>{val.title}</h4>
                <Paragraph>
                  <p>{val.desc}</p>
                </Paragraph>
              </CardContent>
            </TeamCard>
          );
        })}
      </TeamGrid>
    </TeamWrapper>
  );
};

export default Management;
