using Microsoft.EntityFrameworkCore.Migrations;

namespace ClinicWebApi.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Especialidad",
                columns: table => new
                {
                    IdEspecialidad = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "nvarchar(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Especialidad", x => x.IdEspecialidad);
                });

            migrationBuilder.CreateTable(
                name: "Paciente",
                columns: table => new
                {
                    IdPaciente = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombres = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    NumDocumento = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    NumSeguroSocial = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    Direccion = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    TelContacto = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    CodPostal = table.Column<string>(type: "nvarchar(8)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(20)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Paciente", x => x.IdPaciente);
                });

            migrationBuilder.CreateTable(
                name: "Doctor",
                columns: table => new
                {
                    IdDoctor = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombres = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    IdEspecialidad = table.Column<int>(nullable: false),
                    NumCredencial = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    Hospital = table.Column<string>(type: "nvarchar(30)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctor", x => x.IdDoctor);
                    table.ForeignKey(
                        name: "FK_Doctor_Especialidad_IdEspecialidad",
                        column: x => x.IdEspecialidad,
                        principalTable: "Especialidad",
                        principalColumn: "IdEspecialidad",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PacienteXDoctor",
                columns: table => new
                {
                    IdPacienteXDoctor = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdPaciente = table.Column<int>(type: "int", nullable: false),
                    IdDoctor = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PacienteXDoctor", x => x.IdPacienteXDoctor);
                    table.ForeignKey(
                        name: "FK_PacienteXDoctor_Doctor_IdDoctor",
                        column: x => x.IdDoctor,
                        principalTable: "Doctor",
                        principalColumn: "IdDoctor",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PacienteXDoctor_Paciente_IdPaciente",
                        column: x => x.IdPaciente,
                        principalTable: "Paciente",
                        principalColumn: "IdPaciente",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Doctor_IdEspecialidad",
                table: "Doctor",
                column: "IdEspecialidad");

            migrationBuilder.CreateIndex(
                name: "IX_PacienteXDoctor_IdDoctor",
                table: "PacienteXDoctor",
                column: "IdDoctor");

            migrationBuilder.CreateIndex(
                name: "IX_PacienteXDoctor_IdPaciente",
                table: "PacienteXDoctor",
                column: "IdPaciente");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PacienteXDoctor");

            migrationBuilder.DropTable(
                name: "Doctor");

            migrationBuilder.DropTable(
                name: "Paciente");

            migrationBuilder.DropTable(
                name: "Especialidad");
        }
    }
}
