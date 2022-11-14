FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Soft-Fx/Soft-Fx.csproj", "Soft-Fx/"]
RUN dotnet restore "Soft-Fx/Soft-Fx.csproj"
COPY . .
WORKDIR "/src/Soft-Fx"
RUN dotnet build "Soft-Fx.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Soft-Fx.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Soft-Fx.dll"]